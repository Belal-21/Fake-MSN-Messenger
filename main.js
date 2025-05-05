// Function to handle status change
document.getElementById('status-dropdown').addEventListener('change', function() {
  const status = this.value;
  console.log(`Status changed to: ${status}`);
});

// Function to update the status message
document.getElementById('status-message').addEventListener('input', function() {
  const statusMessage = this.value;
  console.log(`Status message updated to: ${statusMessage}`);
});

// Function to switch themes
document.getElementById('theme-select').addEventListener('change', function() {
  const theme = this.value;
  document.body.className = theme;
  console.log(`Theme switched to: ${theme}`);
});

// Function to open a chat window
function openChat(contactName) {
  const chatWindow = document.getElementById('chat-window');
  const chatName = document.getElementById('chat-name');
  const chatMessages = document.getElementById('chat-messages');

  chatName.textContent = contactName;
  chatWindow.classList.remove('hidden');
  chatMessages.innerHTML = ''; // Clear previous messages

  loadChatHistory(contactName);

  // Add old messages based on the contact
  const messages = {
    'Alex': ['Alex: Hey, what are you up to?'],
    'Bob': ['Bob: I am offline, leave a message.'],
    'Mazen': ['Mazen: Can I say a joke?'],
    'Belal': ['Belal: Hi, I am the creator. Did you enjoy it?'],
    'Hacker': ['Hacker: Can I please hack you? (5 years ago)'],
    'Mom': ['Mom: You are grounded!'],
    'Dad': ['Dad: Don’t forget to take out the trash.'],
    'Teacher': ['Teacher: Your homework is due tomorrow.'],
    'Bully': ['Bully: Give me your lunch money!'],
    'School': ['Welcome to the mysterious School group chat!'],
    'MysteryUser1': ['MysteryUser1: I know what you did last summer.'],
    'MysteryUser2': ['MysteryUser2: The cake is a lie.'],
    'MysteryUser3': ['MysteryUser3: Follow the white rabbit.'],
    'MysteryUser4': ['MysteryUser4: I am watching you.'],
    'MysteryUser5': ['MysteryUser5: Don’t trust anyone.'],
    'MysteryUser6': ['MysteryUser6: The password is swordfish.'],
    'MysteryUser7': ['MysteryUser7: Meet me at midnight.'],
    'MysteryUser8': ['MysteryUser8: The treasure is buried under the old oak tree.'],
    'MysteryUser9': ['MysteryUser9: Beware of the man in the red hat.'],
    'MysteryUser10': ['MysteryUser10: The key is hidden in plain sight.'],
    'MysteryUser11': ['MysteryUser11: Trust the stars to guide you.'],
    'MysteryUser12': ['MysteryUser12: The answer lies within.'],
    'MysteryUser13': ['MysteryUser13: Seek and you shall find.'],
    'MysteryUser14': ['MysteryUser14: The truth is out there.'],
    'MysteryUser15': ['MysteryUser15: You are not alone.'],
    'MysteryUser16': ['MysteryUser16: The clock is ticking.'],
    'MysteryUser17': ['MysteryUser17: Look behind you.'],
    'MysteryUser18': ['MysteryUser18: The end is near.'],
    'MysteryUser19': ['MysteryUser19: The beginning is the end.'],
    'MysteryUser20': ['MysteryUser20: The circle is complete.'],
    'MysteryUser21': ['MysteryUser21: The prophecy is true.'],
    'MysteryUser22': ['MysteryUser22: The chosen one will rise.'],
    'MysteryUser23': ['MysteryUser23: The shadows are moving.'],
    'MysteryUser24': ['MysteryUser24: The light will prevail.'],
    'MysteryUser25': ['MysteryUser25: The darkness is coming.'],
    'MysteryUser26': ['MysteryUser26: The storm is brewing.'],
    'MysteryUser27': ['MysteryUser27: The calm before the storm.'],
    'MysteryUser28': ['MysteryUser28: The eye of the storm.'],
    'MysteryUser29': ['MysteryUser29: The storm has passed.'],
    'MysteryUser30': ['MysteryUser30: The dawn of a new era.']
  };
  

  if (messages[contactName]) {
    messages[contactName].forEach(msg => {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.textContent = msg;
      chatMessages.appendChild(messageDiv);
    });
  }
}

// Function to close the chat window
function closeChat() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.classList.add('hidden');
}

// Function to insert an emoji into the message input
function insertEmoji(emojiAlt) {
  const input = document.getElementById('msg-input');
  input.value += ` ${emojiAlt} `;
}

// Function to send a message and simulate a reply after 15 seconds
function sendMessage() {
  const input = document.getElementById('msg-input');
  const message = input.value;
  if (message.trim() === '') return;

  const chatMessages = document.getElementById('chat-messages');
  const newMessage = document.createElement('div');
  newMessage.classList.add('message');
  newMessage.textContent = `You: ${message}`;
  chatMessages.appendChild(newMessage);

  saveChatMessage('You', message);

  input.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Simulate a reply after 15 seconds
  setTimeout(() => {
    const replyMessage = document.createElement('div');
    replyMessage.classList.add('message');
    replyMessage.textContent = `Friend: Got it!`;
    chatMessages.appendChild(replyMessage);

    saveChatMessage('Friend', 'Got it!');

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 15000);
}

// Function to save chat messages to localStorage
function saveChatMessage(sender, message) {
  const chatName = document.getElementById('chat-name').textContent;
  let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};

  if (!chatHistory[chatName]) {
    chatHistory[chatName] = [];
  }

  chatHistory[chatName].push(`${sender}: ${message}`);
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Function to load chat history when opening a chat
function loadChatHistory(contactName) {
  const chatMessages = document.getElementById('chat-messages');
  const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};

  if (chatHistory[contactName]) {
    chatHistory[contactName].forEach(message => {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.textContent = message;
      chatMessages.appendChild(messageDiv);
    });
  }
}

// Function to send a nudge
function sendNudge() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.classList.add('nudge');
  setTimeout(() => chatWindow.classList.remove('nudge'), 500);
  alert('You sent a nudge!');
}

// Function to load emojis into the static emoji bar
function loadEmojisToBar() {
  const emojiBar = document.getElementById('emoji-bar');
  const emojis = [
    '😀', '😂', '😍', '😎', '😢', '😡', '👍', '👎', '🙏', '🎉',
    '💻', '📚', '🍕', '🎮', '🚀', '🌟', '🔥', '💔', '❤️', '😱'
  ];

  emojis.forEach(emoji => {
    const span = document.createElement('span');
    span.textContent = emoji;
    span.classList.add('emoji-icon');
    span.style.cursor = 'pointer';
    span.style.fontSize = '20px';
    span.style.margin = '5px';
    span.addEventListener('click', () => insertEmoji(emoji));
    emojiBar.appendChild(span);
  });
}

// Function to block/unblock contacts
function toggleBlockContact(contactName) {
  console.log(`${contactName} has been blocked/unblocked.`);
}

// Function to simulate contacts sending messages
function simulateMessages() {
  const chatMessages = document.getElementById('chat-messages');
  const simulatedChats = {
    'Alex': ['Alex: Did you finish the project?'],
    'Bob': ['Bob: I am offline, but I will reply later.'],
    'Mazen': [
      'Mazen: Why don’t skeletons fight each other? They don’t have the guts.',
      'Mazen: I told my computer I needed a break, and now it won’t stop sending me KitKats.',
      'Mazen: Why did the scarecrow win an award? Because he was outstanding in his field.',
      'Mazen: I would tell you a construction joke, but I’m still working on it.',
      'Mazen: What do you call fake spaghetti? An impasta!'
    ],
    'Belal': ['Belal: I hope you are enjoying this!'],
    'Hacker': ['Hacker: I am watching you...'],
    'Mom': ['Mom: Dinner is ready!'],
    'Dad': ['Dad: Don’t forget to mow the lawn.'],
    'Teacher': ['Teacher: Your grades are improving.'],
    'Bully': ['Bully: You better watch out!']
  };

  setInterval(() => {
    const activeChat = document.getElementById('chat-name').textContent;
    if (simulatedChats[activeChat]) {
      const randomMessage = simulatedChats[activeChat][Math.floor(Math.random() * simulatedChats[activeChat].length)];
      setTimeout(() => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = randomMessage;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        saveChat(activeChat, randomMessage);
      }, 15000); // Simulate a message after 15 seconds
    }
  }, 20000); // Check every 20 seconds
}

// Function to save chat messages
function saveChat(contactName, message) {
  let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
  if (!chatHistory[contactName]) {
    chatHistory[contactName] = [];
  }
  chatHistory[contactName].push(message);
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Load emojis into the bar when the page loads
document.addEventListener('DOMContentLoaded', loadEmojisToBar);

// Call simulateMessages when a chat is opened
document.getElementById('chat-window').addEventListener('transitionend', simulateMessages);
