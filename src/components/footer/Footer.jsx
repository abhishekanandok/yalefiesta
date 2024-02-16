import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        {/* Add your social media icons here */}
        <span>Icon 1</span>
        <span>Icon 2</span>
        <span>Icon 3</span>
        {/* Add more social media icons as needed */}
      </div>

      <div className={styles.navigation}>
        <p>About</p>
        <p>Eventime</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>Tickets</p>
        <p>Venue</p>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2018 Exhibz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
