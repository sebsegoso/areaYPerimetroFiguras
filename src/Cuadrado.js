import Poligono from './Poligono'

const cuadrado = {
    area() {
        let lado = Poligono.valores()[1]

        return Math.pow(lado, 2)
    },
    perimetro() {
        let lado = Poligono.valores()[1]

        return lado * 4
    }
}

export default cuadrado