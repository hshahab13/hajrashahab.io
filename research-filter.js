document.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelectorAll('.research-tile');

  const activeFilters = {
    topic: 'all',
    type: 'all',
    year: 'all'
  };

  function applyFilters() {
  tiles.forEach(tile => {
    const matchesTopic =
      activeFilters.topic === 'all' ||
      tile.dataset.topic === activeFilters.topic;

    const matchesType =
      activeFilters.type === 'all' ||
      tile.dataset.type === activeFilters.type;

    const matchesYear =
      activeFilters.year === 'all' ||
      tile.dataset.year === activeFilters.year;

    const matches = matchesTopic && matchesType && matchesYear;

    // Toggle 'hidden' class instead of display:none
    tile.classList.toggle('hidden', !matches);
  });
}

  /* ======================
     TOPIC BUTTONS
     ====================== */
  document.querySelectorAll('.filter-btn[data-topic]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilters.topic = btn.dataset.topic;

      // Active UI
      document
        .querySelectorAll('.filter-btn[data-topic]')
        .forEach(b => b.classList.remove('active'));

      btn.classList.add('active');

      applyFilters();
    });
  });

  /* ======================
     TYPE + YEAR BUTTONS
     ====================== */
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter; // "type" or "year"
      const value = btn.dataset.value;

      activeFilters[filter] = value;

      // Active UI scoped to group
      document
        .querySelectorAll(`.filter-btn[data-filter="${filter}"]`)
        .forEach(b => b.classList.remove('active'));

      btn.classList.add('active');

      applyFilters();
    });
  });

  /* ======================
     CLICKABLE TILE TAGS
     ====================== */
  document.querySelectorAll('.tile-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const topic =
        tag.closest('.research-tile')?.dataset.topic || 'all';

      activeFilters.topic = topic;

      // Sync topic buttons
      document
        .querySelectorAll('.filter-btn[data-topic]')
        .forEach(b => b.classList.remove('active'));

      document
        .querySelector(`.filter-btn[data-topic="${topic}"]`)
        ?.classList.add('active');

      applyFilters();
    });
  });
});
