 // Simulated job data
 const jobs = [
  { title: 'Web Developer', description: 'Full-stack web development position.' },
  { title: 'Data Analyst', description: 'Analyzing and interpreting complex data sets.' },
  // Add more jobs as needed
];

// Function to display jobs
function displayJobs() {
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = '';

  jobs.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.className = 'job';
    jobDiv.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
    jobList.appendChild(jobDiv);
  });
}

// Display initial jobs
displayJobs();

// Event listener for form submission
document.getElementById('jobForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const jobTitle = document.getElementById('jobTitle').value;
  const jobDescription = document.getElementById('jobDescription').value;

  // Add the new job to the simulated data
  jobs.push({ title: jobTitle, description: jobDescription });

  // Display the updated list of jobs
  displayJobs();

  // Clear the form fields
  document.getElementById('jobTitle').value = '';
  document.getElementById('jobDescription').value = '';
});