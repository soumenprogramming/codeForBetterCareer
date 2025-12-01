import React from 'react';

function DashboardPage() {
  const email = localStorage.getItem('cfbc_user_email');

  return (
    <div className="home">
      <section className="section">
        <h1>Welcome back{email ? `, ${email}` : ''}</h1>
        <p>
          This is your student dashboard. Soon we will show your enrolled courses, progress and
          recommendations here.
        </p>
      </section>
    </div>
  );
}

export default DashboardPage;


