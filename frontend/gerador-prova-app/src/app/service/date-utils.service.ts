import { Injectable } from '@angular/core';
import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  private readonly BACKEND_DATE_FORMAT = 'yyyy-MM-dd'; // Formato aceito pelo LocalDate do Java
  private readonly FRONTEND_DATE_FORMAT = 'dd/MM/yyyy'; // Formato brasileiro usado no frontend

  /**
   * Converte uma data em formato brasileiro (dd/MM/yyyy) para o formato do backend (yyyy-MM-dd).
   * @param dateString A data em formato brasileiro.
   * @returns A data em formato ISO (yyyy-MM-dd) ou null se inválida.
   */
  toIsoFormat(dateString: string): string | null {
    try {
      const date = parse(dateString, this.FRONTEND_DATE_FORMAT, new Date(), { locale: ptBR });
      return format(date, this.BACKEND_DATE_FORMAT);
    } catch (error) {
      console.error('Data inválida:', dateString);
      return null;
    }
  }

  /**
   * Converte uma data em formato do backend (yyyy-MM-dd) para o formato brasileiro (dd/MM/yyyy).
   * @param dateString A data em formato ISO.
   * @returns A data em formato brasileiro ou null se inválida.
   */
  toBrFormat(dateString: string): string | null {
    try {
      const date = parse(dateString, this.BACKEND_DATE_FORMAT, new Date());
      return format(date, this.FRONTEND_DATE_FORMAT, { locale: ptBR });
    } catch (error) {
      console.error('Data inválida:', dateString);
      return null;
    }
  }
}
