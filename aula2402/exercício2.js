class Cidade{
    nome =' Maceió - Pajuçara';
    estado = ' Alagoas';
    quantHabitantes = 957900;

mostrar(){
    console.log(this.nome);//chamada de atributo
    console.log(this.estado);
    console.log(this.quantHabitantes);
}
}

const cidade = new Cidade();
cidade.mostrar();