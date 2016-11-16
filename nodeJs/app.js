process.stdin.resume()
process.stdin.setEncoding('utf8')
console.log('Quel est ton âge ? ')

process.stdin.on('data', (age) => {
    if (isNaN(Number(age))) {
        age = age.replace("\n", "")
        console.log(age + ' n\'est pas un nombre')
    } else if (age > 99 || age < 0) {
        console.log("Veuillez rentrer un âge correct, merci.")
    } else {
        var annee = new Date().getFullYear();
        var dateNaiss = annee - age
        console.log('Vous êtes né en ' + dateNaiss)
    }
    process.exit()
})
