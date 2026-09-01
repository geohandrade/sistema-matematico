function calculateBhaskara(a, b, c) {
    if (a === 0) {
        return "O valor de 'a' não pode ser zero em uma equação de 2º grau.";
    }
    const delta = ( b * b ) - ( 4 * a * c);
    if (delta < 0) {
        return "Delta negativo. Não existem raízes reais.";
    }
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return {
        delta: delta,
        x1: x1,
        x2: x2
    };
}
module.exports = calculateBhaskara ;