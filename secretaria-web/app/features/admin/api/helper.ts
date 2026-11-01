export function generateProtocol() {
  let contador = 1;

  return function gerarProtocolo(): string {
    const anoAtual = new Date().getFullYear();
    // Formata o contador para ter sempre 3 dígitos (ex: 1 vira "001", 12 vira "012")
    const numeroFormatado = String(contador).padStart(3, '0');
    
    contador++; // Incrementa para a próxima chamada
    
    return `EMG-${anoAtual}-${numeroFormatado}`;
  };
}