class PetitionHttp<TypeClass> {
    data: TypeClass[] = []
}

const petition1 = new PetitionHttp<number>()
console.log(petition1.data)
