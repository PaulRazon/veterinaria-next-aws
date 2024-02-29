export function numeroAMoneda(numero: number): string {
    return numero.toLocaleString('es-ES', { style: 'currency', currency: 'USD' });
}