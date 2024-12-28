package br.com.villaca.prova.util;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Field;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class AngularComponentGenerator implements CommandLineRunner {

    private static final String BASE_PACKAGE = "br.com.villaca.prova.model";
    private static final String OUTPUT_DIRECTORY = "src/main/resources/angular";

    @Override
    public void run(String... args) throws Exception {
        // Obter todas as classes do pacote
        List<Class<?>> models = getModelClasses(BASE_PACKAGE);

        // Gerar componentes Angular para cada modelo
        for (Class<?> model : models) {
            generateComponentFiles(model);
        }
    }

     private List<Class<?>> getModelClasses(String basePackage) throws Exception {
        List<Class<?>> classes = new ArrayList<>();
        String packagePath = basePackage.replace(".", "/");
        File packageDir = new File("src/main/java/" + packagePath);
        
        for (File file : packageDir.listFiles()) {
            if (file.getName().endsWith(".java")) {
                String className = basePackage + "." + file.getName().replace(".java", "");
                classes.add(Class.forName(className));
            }
        }
        return classes;
    }

    private void generateComponentFiles(Class<?> modelClass) throws IOException {
        String modelName = modelClass.getSimpleName();
        String modelPath = OUTPUT_DIRECTORY + "/" + modelName.toLowerCase();

        Files.createDirectories(Paths.get(modelPath));

        // Obter os campos do modelo
        List<Field> fields = Arrays.asList(modelClass.getDeclaredFields());

        // Gerar arquivos do componente
        generateAngularComponent(modelName, modelPath, fields);
        generateAngularFormComponent(modelName, modelPath + "/" + modelName.toLowerCase() + "-form", fields);
    }

    private void generateAngularComponent(String modelName, String outputPath, List<Field> fields) throws IOException {
        // Caminho base do componente
        String componentPath = outputPath;// + "/" + modelName.toLowerCase();
        Files.createDirectories(Paths.get(componentPath));

        // Caminhos para os arquivos
        Path tsFile = Paths.get(componentPath + "/" + modelName.toLowerCase() + ".component.ts");
        Path htmlFile = Paths.get(componentPath + "/" + modelName.toLowerCase() + ".component.html");
        Path cssFile = Paths.get(componentPath + "/" + modelName.toLowerCase() + ".component.css");
        Path specFile = Paths.get(componentPath + "/" + modelName.toLowerCase() + ".component.spec.ts");

        // Gerar arquivo .ts
        String tsContent = "import { Component } from '@angular/core';\n\n" +
                "@Component({\n" +
                "  selector: 'app-" + modelName.toLowerCase() + "',\n" +
                "  templateUrl: './" + modelName.toLowerCase() + ".component.html',\n" +
                "  styleUrls: ['./" + modelName.toLowerCase() + ".component.css']\n" +
                "})\n" +
                "export class " + modelName + "Component {\n" +
                "  items: any[] = []; // Exemplo de dados\n" +
                "}\n";
        Files.write(tsFile, tsContent.getBytes());

        // Gerar arquivo .html
        String htmlContent = generateTableHtml(modelName, fields);
        Files.write(htmlFile, htmlContent.getBytes());

        // Gerar arquivo .css
        String cssContent = "/* TODO: Estilize o componente aqui */\n";
        Files.write(cssFile, cssContent.getBytes());

        // Gerar arquivo .spec.ts
        String specContent = "import { ComponentFixture, TestBed } from '@angular/core/testing';\n" +
                "import { " + modelName + "Component } from './" + modelName.toLowerCase() + ".component';\n\n" +
                "describe('" + modelName + "Component', () => {\n" +
                "  let component: " + modelName + "Component;\n" +
                "  let fixture: ComponentFixture<" + modelName + "Component>;\n\n" +
                "  beforeEach(async () => {\n" +
                "    await TestBed.configureTestingModule({\n" +
                "      declarations: [" + modelName + "Component]\n" +
                "    }).compileComponents();\n" +
                "  });\n\n" +
                "  beforeEach(() => {\n" +
                "    fixture = TestBed.createComponent(" + modelName + "Component);\n" +
                "    component = fixture.componentInstance;\n" +
                "    fixture.detectChanges();\n" +
                "  });\n\n" +
                "  it('should create', () => {\n" +
                "    expect(component).toBeTruthy();\n" +
                "  });\n" +
                "});\n";
        Files.write(specFile, specContent.getBytes());
    }

    private void generateAngularFormComponent(String modelName, String outputPath, List<Field> fields) throws IOException {
        Files.createDirectories(Paths.get(outputPath));

        // Caminhos para os arquivos
        Path tsFile = Paths.get(outputPath + "/" + modelName.toLowerCase() + "-form.component.ts");
        Path htmlFile = Paths.get(outputPath + "/" + modelName.toLowerCase() + "-form.component.html");
        Path cssFile = Paths.get(outputPath + "/" + modelName.toLowerCase() + "-form.component.css");
        Path specFile = Paths.get(outputPath + "/" + modelName.toLowerCase() + "-form.component.spec.ts");

        // Gerar arquivo .ts
        String tsContent = "import { Component } from '@angular/core';\n" +
                "import { FormGroup, FormControl } from '@angular/forms';\n\n" +
                "@Component({\n" +
                "  selector: 'app-" + modelName.toLowerCase() + "-form',\n" +
                "  templateUrl: './" + modelName.toLowerCase() + "-form.component.html',\n" +
                "  styleUrls: ['./" + modelName.toLowerCase() + "-form.component.css']\n" +
                "})\n" +
                "export class " + modelName + "FormComponent {\n" +
                "  form = new FormGroup({\n" +
                fields.stream()
                        .map(field -> "    " + field.getName() + ": new FormControl('')")
                        .reduce((a, b) -> a + ",\n" + b)
                        .orElse("") +
                "\n  });\n\n" +
                "  onSubmit() {\n" +
                "    console.log(this.form.value);\n" +
                "  }\n" +
                "}\n";
        Files.write(tsFile, tsContent.getBytes());

        // Gerar arquivo .html
        StringBuilder formHtml = new StringBuilder();
        formHtml.append("<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n");
        for (Field field : fields) {
            formHtml.append("  <div class=\"mb-3\">\n")
                    .append("    <label for=\"" + field.getName() + "\" class=\"form-label\">" + field.getName() + "</label>\n")
                    .append("    <input type=\"text\" class=\"form-control\" id=\"" + field.getName() + "\" formControlName=\"" + field.getName() + "\">\n")
                    .append("  </div>\n");
        }
        formHtml.append("  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n");
        Files.write(htmlFile, formHtml.toString().getBytes());

        // Gerar arquivo .css
        String cssContent = "/* Estilize o formulário aqui */\n";
        Files.write(cssFile, cssContent.getBytes());

        // Gerar arquivo .spec.ts
        String specContent = "/* Escreva os testes do componente de formulário */\n";
        Files.write(specFile, specContent.getBytes());
    }

    private String generateTableHtml(String modelName, List<Field> fields) {
        StringBuilder tableHtml = new StringBuilder();
        tableHtml.append("<table class=\"table table-striped\">\n");
        tableHtml.append("  <thead>\n");
        tableHtml.append("    <tr>\n");
        fields.forEach(field -> tableHtml.append("      <th>" + field.getName() + "</th>\n"));
        tableHtml.append("    </tr>\n");
        tableHtml.append("  </thead>\n");
        tableHtml.append("  <tbody>\n");
        tableHtml.append("    <tr *ngFor=\"let item of items\">\n");
        fields.forEach(field -> {
            if (field.isAnnotationPresent(Column.class)) {
                tableHtml.append("      <td>{{ item." + field.getName() + " }}</td>\n");
            } else if (field.isAnnotationPresent(JoinColumn.class)) {
                tableHtml.append("      <td>{{ item." + field.getName() + ".id }}</td>\n");
            }
        });
        tableHtml.append("    </tr>\n");
        tableHtml.append("  </tbody>\n");
        tableHtml.append("</table>\n");
        return tableHtml.toString();
    }
}
