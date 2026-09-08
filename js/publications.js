const publications = [
  {
    id: 1,
    title: 'Can Malayali',
    volume: 'Volume 1',
    issue: 'Issue 9',
    date: '2023-07-03',
    year: 2023,
    month: 7,
    monthName: 'July',
    day: 3,
    pages: 18,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-july-2023.pdf'
  },
  {
    id: 2,
    title: 'Can Malayali',
    volume: 'Volume 1',
    issue: 'Issue 10',
    date: '2023-08-30',
    year: 2023,
    month: 8,
    monthName: 'August',
    day: 30,
    pages: 16,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/august-2023.jpg',
    pdf: 'assets/pdf/can-malayali-august-2023.pdf'
  },
  {
    id: 3,
    title: 'Can Malayali',
    volume: 'Volume 1',
    issue: 'Issue 11',
    date: '2023-09-22',
    year: 2023,
    month: 9,
    monthName: 'September',
    day: 22,
    pages: 20,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/september-2023.jpg',
    pdf: 'assets/pdf/can-malayali-september-2023.pdf'
  },
  {
    id: 4,
    title: 'Can Malayali',
    volume: 'Volume 2',
    issue: 'Issue 1',
    date: '2024-01-18',
    year: 2024,
    month: 1,
    monthName: 'January',
    day: 18,
    pages: 22,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/january-2024.jpg',
    pdf: 'assets/pdf/can-malayali-january-2024.pdf'
  },
  {
    id: 5,
    title: 'Can Malayali',
    volume: 'Volume 2',
    issue: 'Issue 2',
    date: '2024-03-12',
    year: 2024,
    month: 3,
    monthName: 'March',
    day: 12,
    pages: 24,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-march-2024.pdf'
  },
  {
    id: 6,
    title: 'Can Malayali',
    volume: 'Volume 2',
    issue: 'Issue 3',
    date: '2024-06-07',
    year: 2024,
    month: 6,
    monthName: 'June',
    day: 7,
    pages: 19,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-june-2024.pdf'
  },
  {
    id: 7,
    title: 'Can Malayali',
    volume: 'Volume 3',
    issue: 'Issue 1',
    date: '2025-02-17',
    year: 2025,
    month: 2,
    monthName: 'February',
    day: 17,
    pages: 21,
    location: 'Toronto, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-february-2025.pdf'
  },
  {
    id: 8,
    title: 'Can Malayali',
    volume: 'Volume 3',
    issue: 'Issue 2',
    date: '2025-05-22',
    year: 2025,
    month: 5,
    monthName: 'May',
    day: 22,
    pages: 17,
    location: 'Toronto, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-may-2025.pdf'
  },
  {
    id: 9,
    title: 'Can Malayali',
    volume: 'Volume 3',
    issue: 'Issue 3',
    date: '2025-08-14',
    year: 2025,
    month: 8,
    monthName: 'August',
    day: 14,
    pages: 18,
    location: 'Toronto, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-august-2025.pdf'
  },
  {
    id: 10,
    title: 'Can Malayali',
    volume: 'Volume 4',
    issue: 'Issue 1',
    date: '2026-01-08',
    year: 2026,
    month: 1,
    monthName: 'January',
    day: 8,
    pages: 20,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-january-2026.pdf'
  },
  {
    id: 11,
    title: 'Can Malayali',
    volume: 'Volume 4',
    issue: 'Issue 2',
    date: '2026-04-25',
    year: 2026,
    month: 4,
    monthName: 'April',
    day: 25,
    pages: 18,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-april-2026.pdf'
  },
  {
    id: 12,
    title: 'Can Malayali',
    volume: 'Volume 4',
    issue: 'Issue 3',
    date: '2026-07-18',
    year: 2026,
    month: 7,
    monthName: 'July',
    day: 18,
    pages: 22,
    location: 'Ontario, Canada',
    cover: 'assets/images/publications/july-2023.jpg',
    pdf: 'assets/pdf/can-malayali-july-2026.pdf'
  }
];

const sortedPublications = [...publications].sort((a, b) => new Date(b.date) - new Date(a.date));

function getLatestPublication() {
  return sortedPublications[0];
}

function renderLatestPublication() {
  const latest = getLatestPublication();
  const container = document.getElementById('latestPublication');

  if (!latest || !container) return;

  container.innerHTML = `
    <div class="publication-feature">
      <div class="publication-cover">
        <img src="${latest.cover}" alt="${latest.title} cover for ${latest.monthName} ${latest.year}" />
      </div>
      <div class="publication-details">
        <span class="issue-title">Latest Publication</span>
        <h3>${latest.title}</h3>
        <p class="mb-3 text-muted">${latest.volume} | ${latest.issue}</p>
        <p class="lead fw-semibold">${latest.monthName} ${latest.year}</p>
        <div class="stats-list">
          <span><i class="bi bi-file-earmark-text me-2"></i>${latest.pages} Pages</span>
          <span><i class="bi bi-geo-alt me-2"></i>${latest.location}</span>
        </div>
        <div class="action-row">
          <button class="btn btn-primary" type="button" data-view-pdf="${latest.pdf}">Read Now</button>
          <button class="btn btn-outline-primary" type="button" data-download-pdf="${latest.pdf}">Download PDF</button>
        </div>
      </div>
    </div>
  `;

  bindPdfActions();
}

function renderPublicationCards(items, targetId = 'publicationList') {
  const list = document.getElementById(targetId);
  if (!list) return;

  if (!items.length) {
    list.innerHTML = `
      <div class="empty-state visible">
        <i class="bi bi-exclamation-circle"></i>
        <h3 class="mt-3">No publications found for the selected date.</h3>
      </div>
    `;
    return;
  }

  list.innerHTML = items.map((publication) => `
    <div class="publication-card">
      <div class="image-wrap">
        <img src="${publication.cover}" alt="${publication.title} ${publication.volume} ${publication.issue}" />
      </div>
      <div class="card-body">
        <div class="badge">${publication.title}</div>
        <h3>${publication.volume} | ${publication.issue}</h3>
        <p class="mb-2 fw-semibold">${publication.monthName} ${publication.year}</p>
        <div class="meta mb-3">
          <span><i class="bi bi-file-earmark-text me-1"></i>${publication.pages} Pages</span>
          <span><i class="bi bi-geo-alt me-1"></i>${publication.location}</span>
        </div>
        <div class="action-row">
          <button class="btn btn-outline-dark btn-sm" type="button" data-download-pdf="${publication.pdf}">Download PDF</button>
        </div>
      </div>
    </div>
  `).join('');

  bindPdfActions();
}

function updateResultCount(count, targetId = 'resultCount') {
  const resultCounter = document.getElementById(targetId);
  if (!resultCounter) return;
  resultCounter.textContent = `${count} Publication${count === 1 ? '' : 's'} Found`;
}

function bindPdfActions() {
  document.querySelectorAll('[data-view-pdf]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const pdfPath = event.currentTarget.getAttribute('data-view-pdf');
      if (pdfPath) window.open(pdfPath, '_blank');
    });
  });

  document.querySelectorAll('[data-download-pdf]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const pdfPath = event.currentTarget.getAttribute('data-download-pdf');
      if (!pdfPath) return;

      const paymentModalElement = document.getElementById('paymentModal');
      if (!paymentModalElement || !window.bootstrap) return;

      paymentModalElement.dataset.pdfPath = pdfPath;
      const paymentModal = bootstrap.Modal.getOrCreateInstance(paymentModalElement);
      paymentModal.show();
    });
  });
}

function bindPaymentForm() {
  const paymentForm = document.getElementById('paymentForm');
  const paymentMessage = document.getElementById('paymentMessage');
  if (!paymentForm || !paymentMessage) return;

  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    paymentMessage.textContent = 'Payment processing must be connected before downloads can be released.';
    paymentMessage.classList.remove('d-none');
  });
}

function getMonthOptionsForYear(yearValue) {
  if (!yearValue) return [];

  const monthMap = new Map();
  sortedPublications
    .filter((publication) => publication.year === Number(yearValue))
    .forEach((publication) => {
      if (!monthMap.has(publication.month)) monthMap.set(publication.month, publication.monthName);
    });

  return Array.from(monthMap.entries()).map(([month, name]) => ({ month, name })).sort((a, b) => a.month - b.month);
}

function getDayOptionsForYearAndMonth(yearValue, monthValue) {
  if (!yearValue || !monthValue) return [];

  return [...new Set(
    sortedPublications
      .filter((publication) => publication.year === Number(yearValue) && publication.month === Number(monthValue))
      .map((publication) => publication.day)
  )].sort((a, b) => a - b);
}

function populateFilterSelects() {
  const yearSelect = document.getElementById('yearFilter');
  const monthSelect = document.getElementById('monthFilter');
  const daySelect = document.getElementById('dayFilter');

  if (!yearSelect || !monthSelect || !daySelect) return;

  const years = [...new Set(sortedPublications.map((publication) => publication.year))].sort((a, b) => b - a);
  yearSelect.innerHTML = '<option value="">All Years</option>' + years.map((year) => `<option value="${year}">${year}</option>`).join('');
  monthSelect.innerHTML = '<option value="">All Months</option>' + getAllMonths().map((month) => `<option value="${month.value}">${month.name}</option>`).join('');
  daySelect.innerHTML = '<option value="">All Days</option>' + getAllDays().map((day) => `<option value="${day}">${day}</option>`).join('');
}

function getAllMonths() {
  return [
    { value: 1, name: 'January' }, { value: 2, name: 'February' }, { value: 3, name: 'March' },
    { value: 4, name: 'April' }, { value: 5, name: 'May' }, { value: 6, name: 'June' },
    { value: 7, name: 'July' }, { value: 8, name: 'August' }, { value: 9, name: 'September' },
    { value: 10, name: 'October' }, { value: 11, name: 'November' }, { value: 12, name: 'December' }
  ];
}

function getAllDays() {
  return Array.from({ length: 31 }, (_, index) => index + 1);
}

function updateMonthOptions() {
  const yearSelect = document.getElementById('yearFilter');
  const monthSelect = document.getElementById('monthFilter');
  const daySelect = document.getElementById('dayFilter');

  if (!yearSelect || !monthSelect || !daySelect) return;

  const selectedYear = yearSelect.value;
  monthSelect.innerHTML = '<option value="">All Months</option>';
  getAllMonths().forEach((month) => {
    const option = document.createElement('option');
    option.value = month.month;
    option.textContent = month.name;
    monthSelect.appendChild(option);
  });
}

function updateDayOptions() {
  const yearSelect = document.getElementById('yearFilter');
  const monthSelect = document.getElementById('monthFilter');
  const daySelect = document.getElementById('dayFilter');

  if (!yearSelect || !monthSelect || !daySelect) return;

  const selectedYear = yearSelect.value;
  const selectedMonth = monthSelect.value;
  daySelect.innerHTML = '<option value="">All Days</option>';
  getAllDays().forEach((day) => {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
  });
}

function getSelectedFilters() {
  const yearSelect = document.getElementById('yearFilter');
  const monthSelect = document.getElementById('monthFilter');
  const daySelect = document.getElementById('dayFilter');
  const searchInput = document.getElementById('searchInput');

  return {
    year: yearSelect ? yearSelect.value : '',
    month: monthSelect ? monthSelect.value : '',
    day: daySelect ? daySelect.value : '',
    search: searchInput ? searchInput.value.trim().toLowerCase() : ''
  };
}

function applyFilters() {
  const filters = getSelectedFilters();

  const filtered = sortedPublications.filter((publication) => {
    const matchesYear = filters.year ? publication.year === Number(filters.year) : true;
    const matchesMonth = filters.month ? publication.month === Number(filters.month) : true;
    const matchesDay = filters.day ? publication.day === Number(filters.day) : true;

    const matchesSearch = !filters.search || [
      publication.title,
      publication.volume,
      publication.issue,
      publication.monthName,
      publication.location,
      String(publication.year)
    ].some((value) => value.toLowerCase().includes(filters.search));

    return matchesYear && matchesMonth && matchesDay && matchesSearch;
  });

  renderPublicationCards(filtered);
  updateResultCount(filtered.length);
}

function resetFilters() {
  const yearSelect = document.getElementById('yearFilter');
  const monthSelect = document.getElementById('monthFilter');
  const daySelect = document.getElementById('dayFilter');
  const searchInput = document.getElementById('searchInput');

  if (yearSelect) yearSelect.value = '';
  if (monthSelect) monthSelect.value = '';
  if (daySelect) daySelect.value = '';
  if (searchInput) searchInput.value = '';

  monthSelect.innerHTML = '<option value="">All Months</option>';
  daySelect.innerHTML = '<option value="">All Days</option>';

  renderPublicationCards(sortedPublications);
  updateResultCount(sortedPublications.length);
}

function getHomepagePublicationResults() {
  const filters = getSelectedFilters();
  const hasDateFilter = filters.year || filters.month || filters.day;

  if (!hasDateFilter) return sortedPublications.slice(0, 3);

  return sortedPublications.filter((publication) => {
    const matchesYear = filters.year ? publication.year === Number(filters.year) : true;
    const matchesMonth = filters.month ? publication.month === Number(filters.month) : true;
    const matchesDay = filters.day ? publication.day === Number(filters.day) : true;
    return matchesYear && matchesMonth && matchesDay;
  });
}

function initHomepagePublications() {
  const homepageList = document.getElementById('latestPublication');
  if (!homepageList) return;

  populateFilterSelects();
  renderPublicationCards(sortedPublications.slice(0, 3), 'latestPublication');
  updateResultCount(3, 'latestResultCount');

  const refreshHomepageResults = () => {
    const results = getHomepagePublicationResults();
    renderPublicationCards(results, 'latestPublication');
    updateResultCount(results.length, 'latestResultCount');
  };

  document.getElementById('yearFilter')?.addEventListener('change', () => {
    updateMonthOptions();
    updateDayOptions();
    refreshHomepageResults();
  });

  document.getElementById('monthFilter')?.addEventListener('change', () => {
    updateDayOptions();
    refreshHomepageResults();
  });

  document.getElementById('dayFilter')?.addEventListener('change', refreshHomepageResults);
  document.getElementById('reset-button')?.addEventListener('click', () => {
    resetFilters();
    updateResultCount(3, 'latestResultCount');
    renderPublicationCards(sortedPublications.slice(0, 3), 'latestPublication');
  });
}

function initPublicationPage() {
  const publicationList = document.getElementById('publicationList');
  if (!publicationList) return;

  populateFilterSelects();
  renderPublicationCards(sortedPublications);
  updateResultCount(sortedPublications.length);

  document.getElementById('yearFilter')?.addEventListener('change', () => {
    updateMonthOptions();
    updateDayOptions();
    applyFilters();
  });

  document.getElementById('monthFilter')?.addEventListener('change', () => {
    updateDayOptions();
    applyFilters();
  });

  document.getElementById('dayFilter')?.addEventListener('change', applyFilters);
  document.getElementById('search-button')?.addEventListener('click', applyFilters);
  document.getElementById('reset-button')?.addEventListener('click', resetFilters);

  document.getElementById('searchInput')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') applyFilters();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('latestPublication');
  if (homePage) initHomepagePublications();

  if (document.getElementById('publicationList')) initPublicationPage();
  bindPaymentForm();
});
