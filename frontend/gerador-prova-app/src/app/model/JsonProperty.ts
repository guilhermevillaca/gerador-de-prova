import 'reflect-metadata';

const JSON_KEY = Symbol('jsonKey');

// Decorator para propriedades do modelo
function JsonProperty(key?: string): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    const jsonKey = key || propertyKey;
    Reflect.defineMetadata(JSON_KEY, jsonKey, target, propertyKey);
  };
}
