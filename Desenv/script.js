function hideContent() {
    // Adiciona classes para animação de saída
    document.querySelector('.container').classList.add('container-exit');

    // Oculta a barra de rolagem durante a transição
    document.body.style.overflow = 'hidden';

    // Remove o contêiner após a transição
    setTimeout(function() {
        document.body.style.overflow = 'auto';
        document.querySelector('.container').style.display = 'none';

        loadAboutPage();
    }, 1000); // Ajuste o tempo conforme necessário
}

function showContent() {
    // Exibe novamente o contêiner
    document.querySelector('.container').style.display = 'block';

    // Adiciona a classe para animação de entrada
    document.querySelector('.container').classList.add('container-enter');

    // Remove a classe de animação de saída após um pequeno atraso
    setTimeout(function() {
        document.querySelector('.container').classList.remove('container-exit');
    }, 50); // Pequeno atraso para garantir que a classe seja removida após a animação

    
}
function loadAboutPage() {
    var aboutContent = document.getElementById('aboutContent');

    // Verifica se o conteúdo já foi carregado
    if (!aboutContent.innerHTML.trim()) {
        // Faz uma requisição para obter o conteúdo da página "Sobre Mim"
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Insere o conteúdo carregado na div
                aboutContent.innerHTML = xhr.responseText;

                // Exibe a div com o conteúdo
                aboutContent.style.display = 'block';

                // Adiciona a animação ao novo conteúdo
                aboutContent.querySelector('.container').classList.add('fadeInUp');

                // Aguarda a animação terminar antes de exibir a seção "Experiências"
                setTimeout(function() {
                    showExperiences();
                }, 1000); // Ajuste o tempo conforme necessário
            }
        };
        xhr.open('GET', 'about.html', true);
        xhr.send();
    } else {
        // Exibe a div com o conteúdo já carregado
        aboutContent.style.display = 'block';

        // Aguarda a animação terminar antes de exibir a seção "Experiências"
        setTimeout(function() {
            showExperiences();
        }, 1000); // Ajuste o tempo conforme necessário
    }
}

function showExperiences() {
    var experienceContent = document.querySelector('#aboutContent .experiences');

    if (!experienceContent.style.display || experienceContent.style.display === 'none') {
        experienceContent.style.display = 'block';
    } else {
        experienceContent.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Define o texto para a animação de escrita
  
    var contentText = "Me chamo Matheus Fortunato de Freitas\npossuo 19 anos de idade,\npossuo conhecimento de informática,\nvim do Rio de Janeiro e estou a 2 anos\nem Joinville.";

    // Inicia a animação de escrita para o título
    typeWriterAnimation("typing-header", headerText);

    // Aguarda um pouco antes de iniciar a animação de escrita para o conteúdo
    setTimeout(function() {
        typeWriterAnimation("typing-content", contentText);
    }, 2000); // Espera 2 segundos antes de começar o conteúdo (ajuste conforme necessário)
});

function typeWriterAnimation(elementId, text) {
    var element = document.getElementById(elementId);
    var speed = 50; // Velocidade da digitação (ajuste conforme necessário)

    function typeWriter(i) {
        if (i < text.length) {
            if (text.charAt(i) === "\n") {
                element.innerHTML += "<br>"; // Adiciona quebra de linha para '\n'
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(function() {
                typeWriter(i);
            }, speed);
        }
    }

    // Limpa o conteúdo do elemento antes de começar a escrever
    element.innerHTML = "";

    // Inicia a animação de escrita
    typeWriter(0);
}

document.addEventListener("DOMContentLoaded", function() {
  
    var contentText = "Me chamo Matheus Fortunato de Freitas\npossuo 19 anos de idade,\npossuo conhecimento de informática,\nvim do Rio de Janeiro e estou a 2 anos\nem Joinville.";

    // Inicia a animação de escrita para o título
    typeWriterAnimation("typing-header", headerText);

    // Aguarda um pouco antes de iniciar a animação de escrita para o conteúdo
    setTimeout(function() {
        typeWriterAnimation("typing-content", contentText);
    }, 2000); // Espera 2 segundos antes de começar o conteúdo (ajuste conforme necessário)
});

function typeWriterAnimation(elementId, text) {
    var element = document.getElementById(elementId);
    var speed = 50; // Velocidade da digitação (ajuste conforme necessário)
    var maxWidth = 400; // Largura máxima da caixa (ajuste conforme necessário)

    var words = text.split(" ");
    var line = "";
    var lineLength = 0;

    function typeWriter(i, nextI) {
        if (i < words.length) {
            var word = words[i];

            if (lineLength + word.length + 1 <= maxWidth) {
                // Adiciona a palavra à linha
                line += (line === "" ? "" : " ") + word;
                lineLength += word.length + 1;
            } else {
                // Adiciona uma quebra de linha antes da nova palavra
                element.innerHTML += line + "<br>";
                line = word;
                lineLength = word.length + 1;
            }

            // Atualiza o conteúdo da caixa
            element.innerHTML = line;

            setTimeout(function() {
                typeWriter(nextI, nextI + 1);
            }, speed);
        } else {
            // Adiciona a última linha se não estiver vazia
            if (line !== "") {
                element.innerHTML += line;
            }

            // Adiciona uma quebra de linha no final (caso não haja espaço suficiente)
            if (element.clientHeight >= element.scrollHeight) {
                element.innerHTML += "<br>";
            }
        }
    }

    // Limpa o conteúdo do elemento antes de começar a escrever
    element.innerHTML = "";

    // Inicia a animação de escrita
    typeWriter(0, 1);
}


