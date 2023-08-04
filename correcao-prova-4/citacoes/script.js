const quotes = [
    "A vida é como andar de bicicleta. Para ter equilíbrio, você tem que se manter em movimento. - Albert Einstein",
    "O sucesso é ir de fracasso em fracasso sem perder entusiasmo. - Winston Churchill",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz. - Steve Jobs",
    "Nunca desista do que você realmente quer fazer. A pessoa com grandes sonhos é mais poderosa do que aquela que possui todos os fatos. - Albert Einstein",
    "Tudo o que você sempre quis está do outro lado do medo. - George Addair",
    "A vida é 10% o que acontece com você e 90% como você reage a isso. - Charles R. Swindoll",
    "O maior perigo para nós não é que nosso objetivo seja muito alto e não consigamos alcançá-lo, mas que ele seja muito baixo e o alcancemos. - Michelangelo",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário. - Vidal Sassoon",
    "Acredite que você pode e estará no meio do caminho. - Theodore Roosevelt",
    "O verdadeiro segredo para se manter sempre jovem é o eterno desejo de aprender coisas novas. - Henry Ford",
    "Apenas viva a vida. Ao final, não se arrependa do que fez, apenas do que não fez. - Nuno Roque",
    "Faça o que você pode, com o que você tem, onde você estiver. - Theodore Roosevelt",
    "A vida é muito curta para ser pequena. - Benjamin Disraeli"
];

function generateQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}
