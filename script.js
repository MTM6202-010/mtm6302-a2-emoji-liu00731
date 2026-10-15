const emojiCodes = [
  128077, 128293, 127881, 128049, 128054, 127822, 127829, 127918, 128512, 128514, 128525, 128522, 
];

const emoji = document.querySelector('#emoji');

function showEmojis(count = emojiCodes.length) {
  emoji.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const code = emojiCodes[i];
    
    const card = document.createElement('div');
    card.className = 'emoji-card';

    const emojiDiv = document.createElement('div');
    emojiDiv.className = 'emoji-character';
    emojiDiv.textContent = String.fromCodePoint(code);

    const codePara = document.createElement('p');
    codePara.className = 'emoji-code';
    codePara.textContent = code;

    card.appendChild(emojiDiv);
    card.appendChild(codePara);
    emoji.appendChild(card);
  }
}

showEmojis();
