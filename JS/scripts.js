/*******************************************************
 * scripts.js
 *******************************************************/

// 1) GLOBAL JOB DATA
const jobs = [
  {
    id: 1,
    title: 'UX/UI Designer',
    company: 'Google',
    location: 'Mountain View, California',
    type: 'Remote • Part-time • 5+ years',
    salary: '$50k - $101k/yr',
    posted: '5 minutes ago',
    tags: ['Undergraduate', 'Remote', 'Part-time'],
    logo: 'https://via.placeholder.com/50?text=G'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Amazon',
    location: 'Seattle, Washington',
    type: 'Remote • Full-time • 5+ years',
    salary: '$110k - $130k/yr',
    posted: '2 hours ago',
    tags: ['Graduate', 'Management', 'On-site', 'Full-time'],
    logo: 'https://via.placeholder.com/50?text=A'
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Facebook',
    location: 'Menlo Park, California',
    type: 'Remote • Full-time • 5+ years',
    salary: '$120k - $150k/yr',
    posted: '13 hours ago',
    tags: ['Graduate', 'Flexible', 'Remote', 'Full-time'],
    logo: 'https://via.placeholder.com/50?text=F'
  }
  // Add more jobs as needed
];

// 2) DISPLAY JOBS
function displayJobs(jobList) {
  const jobListings = document.getElementById('job-listings');
  if (!jobListings) return; // if not on jobs.html

  jobListings.innerHTML = ''; // Clear existing

  jobList.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');

    // Generate tags
    const tagsHTML = job.tags
        .map(tag => `<span class="job-tag">${tag}</span>`)
        .join(' ');

    jobCard.innerHTML = `
      <div class="job-top">
        <div class="job-header">
          <img src="${job.logo}" alt="${job.company} logo" class="job-logo">
          <h2>${job.title}</h2>
        </div>
        <p>${job.company} - ${job.location}</p>
        <p>${job.type}</p>
      </div>
      <div class="job-bottom">
        <div class="salary">Salary: ${job.salary}</div>
        <p>${job.posted}</p>
        <div class="job-tags">${tagsHTML}</div>
        <div class="job-footer">
          <!-- Button that calls our function with job ID -->
          <button class="details-btn" onclick="viewJobDetails(${job.id})">
            View Details
          </button>
        </div>
      </div>
    `;

    jobListings.appendChild(jobCard);
  });
}

// 3) VIEW JOB DETAILS
function viewJobDetails(jobId) {
  // Navigate to job-details.html?id=jobId
  window.location.href = `job-details.html?id=${jobId}`;
}

// 4) SEARCH JOBS
function searchJobs() {
  const input = document.getElementById('search-input');
  if (!input) return; // if no search input on page

  const query = input.value.toLowerCase().trim();

  // Filter jobs by title OR tags
  const filtered = jobs.filter(job => {
    const titleMatch = job.title.toLowerCase().includes(query);
    const tagMatch = job.tags.some(tag => tag.toLowerCase().includes(query));
    return titleMatch || tagMatch;
  });

  // Re-display with filtered results
  displayJobs(filtered);
}

// 5) TOGGLE MOBILE MENU
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}

// 6) ON DOM LOADED
document.addEventListener('DOMContentLoaded', () => {
  // If there's a #job-listings, we're likely on jobs.html -> display all
  const jobListingsSection = document.getElementById('job-listings');
  if (jobListingsSection) {
    displayJobs(jobs);
  }
});
