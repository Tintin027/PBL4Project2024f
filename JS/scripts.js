/* scripts.js */

// Sample job data
const jobs = [
  {
    title: 'UX/UI Designer',
    company: 'Google',
    location: 'Mountain View, California',
    type: 'Remote • Full-time • 5+ years',
    salary: '$100k - $120k/yr',
    posted: '5 min ago',
    details: 'job-details.html?id=1' // Link to job details page
  },
  {
    title: 'Product Manager',
    company: 'Amazon',
    location: 'Seattle, Washington',
    type: 'Remote • Full-time • 5+ years',
    salary: '$110k - $130k/yr',
    posted: '10 min ago',
    details: 'job-details.html?id=2'
  },
  {
    title: 'Software Engineer',
    company: 'Facebook',
    location: 'Menlo Park, California',
    type: 'Remote • Full-time • 5+ years',
    salary: '$120k - $150k/yr',
    posted: '15 min ago',
    details: 'job-details.html?id=3'
  }
];

// Function to display jobs
function displayJobs(jobList) {
  const jobListings = document.getElementById('job-listings');
  if (jobListings) {
    jobListings.innerHTML = ''; // Clear current listings

    jobList.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');

      jobCard.innerHTML = `
        <h2>${job.title}</h2>
        <p>${job.company} - ${job.location}</p>
        <p>${job.type}</p>
        <p>Salary: ${job.salary}</p>
        <p>${job.posted}</p>
        <a href="${job.details}">View Details</a>
      `;

      jobListings.appendChild(jobCard);
    });
  }
}

// Initial display of jobs
displayJobs(jobs);

// Search functionality
function searchJobs() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(query));
  displayJobs(filteredJobs);
}

// Toggle mobile menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

// Form validation functions
function validateLoginForm() {
  // Add your validation logic here
  return true;
}

function validateSignupForm() {
  // Add your validation logic here
  return true;
}
