// Quote data
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        tags: ["Motivation", "Work"]
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        tags: ["Life", "Wisdom"]
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        tags: ["Design", "Philosophy"]
    }
];

// DOM Elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const tagsElement = document.getElementById('tags');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentQuoteIndex = 0;

// Display quote function
function displayQuote(index) {
    const quote = quotes[index];
    quoteElement.textContent = `"${quote.text}"`;
    authorElement.textContent = `- ${quote.author}`;
    
    // Clear previous tags
    tagsElement.innerHTML = '';
    
    // Add new tags
    quote.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = `#${tag}`;
        tagsElement.appendChild(tagElement);
    });
}

// Navigation functions
prevBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    displayQuote(currentQuoteIndex);
});

nextBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote(currentQuoteIndex);
});

// Initial display
displayQuote(currentQuoteIndex);


// DOM Elements baru
const preloader = document.querySelector('.preloader');
const quoteContent = document.querySelector('.quote-content');

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Auto-transition
let autoChangeInterval;
const startAutoChange = () => {
    autoChangeInterval = setInterval(() => {
        fadeOutQuote();
        setTimeout(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            displayQuote(currentQuoteIndex);
            fadeInQuote();
        }, 500);
    }, 5000);
};

const stopAutoChange = () => {
    clearInterval(autoChangeInterval);
};

// Efek fade
function fadeOutQuote() {
    quoteContent.classList.add('fade-out');
}

function fadeInQuote() {
    setTimeout(() => {
        quoteContent.classList.remove('fade-out');
    }, 10);
}

// Modifikasi displayQuote
function displayQuote(index) {
    const quote = quotes[index];
    quoteElement.textContent = `"${quote.text}"`;
    authorElement.textContent = `- ${quote.author}`;
    
    tagsElement.innerHTML = '';
    quote.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = `#${tag}`;
        tagsElement.appendChild(tagElement);
    });
}

// Pause saat hover
quoteContent.addEventListener('mouseenter', stopAutoChange);
quoteContent.addEventListener('mouseleave', startAutoChange);

// Inisialisasi
displayQuote(currentQuoteIndex);
startAutoChange();







// Contoh data quote dengan berbagai tag
const quotesData = [
  {
    id: 1,
    text: "Cinta adalah ketika kamu memilih untuk bersama seseorang meskipun kau punya pilihan lain.",
    author: "Fiersa Besari",
    tags: ["cinta", "filsafat"]
  },
  {
    id: 2,
    text: "Hidup ini sederhana, tapi kita yang membuatnya rumit.",
    author: "Confucius",
    tags: ["kehidupan", "filsafat"]
  },
  {
    id: 3,
    text: "Kualitas terpenting dalam diri seseorang adalah kegigihan.",
    author: "Winston Churchill",
    tags: ["kehidupan", "kegigihan"]
  },
  {
    id: 4,
    text: "Keberanian adalah kepercayaan diri, meskipun sedang dalam keadaan takut.",
    author: "Nelson Mandela",
    tags: ["kehidupan"]
  },
  {
    id: 5,
    text: "Satu-satunya cara untuk melakukan pekerjaan dengan baik adalah mencintai apa yang Anda lakukan.",
    author: " Steve Jobs",
    tags: ["kehidupan", "cinta"]
  },
  {
    id: 6,
    text: "Ujian karakter yang sebenarnya bukanlah saat dirimu berada di hari-hari terbaikmu, tetapi saat dirimu bertindak di hari-hari terburukmu.",
    author: " George Orwell",
    tags: ["kehidupan", "filsafat"]
  },
  {
    id: 7,
    text: "Nafs (jiwa) dalam jasad itu bagai burung dalam sangkar, merindukan kebebasan di alam lepas, menyatu lagi dengan alam ruhani. Setiap kali ia mengingat alam asalnya, ia pun menangis rindu ingin kembali.",
    author: "Ibnu Sina",
    tags: ["filsafat", "Islam"]
  },
  {
    id: 8,
    text: "Hakikat Tuhan adalah wujud yang haq (benar) yang bukan asalnya tidak ada kemudian ada. Ia selalu mustahil tidak ada. Ia selalu ada dan akan selalu ada.",
    author: "Al-Kindi",
    tags: ["islam", "filsafat"]
  },
  {
    id: 9,
    text: "Pemimpin yang baik adalah yang memahami dan menghargai keberagaman dalam masyarakat.",
    author: "Al-Farabi",
    tags: ["kehidupan", "filsafat", "Pemimpin"]
  },
  {
    id: 10,
    text: "Keadilan adalah keadaan di mana hati seseorang seimbang dan bebas dari hasrat yang tidak teratur.",
    author: "Al-Gazali",
    tags: ["kehidupan", "filsafat", "Pemimpin", "Keadilan"]
  },
  {
    id: 11,
    text: "Dokter yang bodoh adalah ajudan kematian.",
    author: "Ibnu Sina",
    tags: ["kehidupan", "kesehatan"]
  },
  {
    id: 12,
    text: "Kau bisa mencintai tanah air mu tanpa mencintai pemerintahnya",
    author: "Anonim",
    tags: ["kehidupan", "negara", "Pemimpin", "tanah air"]
  },
  // Tambahkan 20+ quote lain di sini...
];

// DOM Elements baru
const searchInput = document.getElementById('search-input');
const tagsWrapper = document.getElementById('tags-wrapper');
const quoteList = document.getElementById('quote-list');
const pagination = document.getElementById('pagination');

// Config
const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let activeTag = "All";

// Init
function init() {
  renderTags();
  renderQuotes();
  setupSearch();
}

// Render Tags
function renderTags() {
  const allTags = ["All", ...new Set(quotesData.flatMap(quote => quote.tags))];
  
  tagsWrapper.innerHTML = allTags.map(tag => `
    <button class="tag-btn" data-tag="${tag}">${tag}</button>
  `).join('');

  // Tag click event
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag = btn.dataset.tag;
      currentPage = 1;
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderQuotes();
    });
  });

  // Set 'All' as default active
  document.querySelector(`.tag-btn[data-tag="All"]`).classList.add('active');
}

// Render Quotes
function renderQuotes() {
  const filteredQuotes = filterQuotes();
  const paginatedQuotes = paginateQuotes(filteredQuotes);
  
  // Di fungsi renderQuotes(), update template:
quoteList.innerHTML = paginatedQuotes.map(quote => `
  <div class="quote-item">
    <button class="copy-btn" data-quote='${quote.text}' title="Copy quote">
      📋
    </button>
    <p class="quote-text">"${quote.text}"</p>
    <p class="quote-author">- ${quote.author}</p>
    <div class="quote-item-tags">
      ${quote.tags.map(tag => `<span class="quote-item-tag">#${tag}</span>`).join('')}
    </div>
  </div>
`).join('');

  renderPagination(filteredQuotes.length);
  setupCopyButtons();
}

// Filter quotes berdasarkan tag/search
function filterQuotes() {
  let filtered = [...quotesData];
  
  if (activeTag !== "All") {
    filtered = filtered.filter(quote => quote.tags.includes(activeTag));
  }
  
  if (searchInput.value) {
    const searchTerm = searchInput.value.toLowerCase();
    filtered = filtered.filter(quote => 
      quote.text.toLowerCase().includes(searchTerm) || 
      quote.author.toLowerCase().includes(searchTerm)
    );
  }
  
  return filtered;
}

// Pagination
function paginateQuotes(quotes) {
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  return quotes.slice(start, start + ITEMS_PER_PAGE);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  pagination.innerHTML = '';
  
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      currentPage = i;
      renderQuotes();
    });
    pagination.appendChild(btn);
  }
}

// Search function
function setupSearch() {
  searchInput.addEventListener('input', () => {
    currentPage = 1;
    renderQuotes();
  });
}

// Init scroll buttons
document.querySelector('.scroll-btn.left').addEventListener('click', () => {
  tagsWrapper.scrollBy({ left: -200, behavior: 'smooth' });
});

document.querySelector('.scroll-btn.right').addEventListener('click', () => {
  tagsWrapper.scrollBy({ left: 200, behavior: 'smooth' });
});

// Jalankan init
init();


// FUNGSI COPY QUOTE (USE)
function setupCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const quote = `"${btn.dataset.quote}"`;
      
      try {
        await navigator.clipboard.writeText(quote);
        showNotification('Quote copied! 📋');
      } catch (err) {
        showNotification('Failed to copy! ❌', false);
      }
    });
  });
}

// Fungsi notifikasi 
function showNotification(message, isSuccess = true) {
  const notification = document.createElement('div');
  notification.className = `copy-notification ${isSuccess ? '' : 'error'}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  // Munculkan notifikasi
  setTimeout(() => notification.classList.add('show'), 10);

  // Hilangkan setelah 3 detik
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}










// Fungsi copy quote (DUMB)
// function setupCopyButtons() {
//   // Hapus semua event listener sebelumnya (jika ada)
//   document.querySelectorAll('.copy-btn').forEach(btn => {
//     btn.replaceWith(btn.cloneNode(true));
//   });

//   // Pasang event listener baru
//   document.querySelectorAll('.copy-btn').forEach(btn => {
//     btn.addEventListener('click', async (e) => {
//       const quote = e.currentTarget.dataset.quote;
//       try {
//         await navigator.clipboard.writeText(`"${quote}"`);
        
//         // Efek visual
//         const originalText = e.currentTarget.textContent;
//         e.currentTarget.textContent = "✓";
//         e.currentTarget.style.background = "#4CAF50";
        
//         setTimeout(() => {
//           e.currentTarget.textContent = originalText;
//           e.currentTarget.style.background = "";
//         }, 2000);
        
//       } catch (err) {
//         console.error("Gagal copy:", err);
//         e.currentTarget.textContent = "❌";
//       }
//     });
//   });
// }




// Fungsi notifikasi
// function showNotification(message, isSuccess = true) {
//   const notification = document.createElement('div');
//   notification.className = `copy-notification ${isSuccess ? '' : 'error'}`;
//   notification.textContent = message;
//   document.body.appendChild(notification);

//   // Munculkan notifikasi
//   setTimeout(() => notification.classList.add('show'), 10);

//   // Hilangkan setelah 3 detik
//   setTimeout(() => {
//     notification.classList.remove('show');
//     setTimeout(() => notification.remove(), 300);
//   }, 3000);
// }




// function showToast(message) {
//   const toast = document.createElement('div');
//   toast.className = 'toast';
//   toast.textContent = message;
//   document.body.appendChild(toast);
  
//   setTimeout(() => toast.style.opacity = '1', 100);
//   setTimeout(() => {
//     toast.style.opacity = '0';
//     setTimeout(() => toast.remove(), 300);
//   }, 2000);
// }

// // Di fungsi copy:
// navigator.clipboard.writeText(`"${quote}"`)
//   .then(() => showToast("Quote copied! 📋"));





