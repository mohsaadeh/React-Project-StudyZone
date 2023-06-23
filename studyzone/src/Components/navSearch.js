import React, { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import CoursesInfo from '../data/CoursesInfo';

const NavSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the courses based on the search query
    const filteredResults = CoursesInfo.filter((course) =>
      course.courseName.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <>
      <div className="navbar__search">
        <span>
          <FaSistrix />
        </span>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <ul className="search_dropdown">
            {searchResults.length > 0 ? (
              searchResults.map((course) => (
                <li key={course.id}>
                  <img src={course.image} alt={course.courseName} />
                  {course.courseName}
                </li>
              ))
            ) : (
              <li>No courses found.</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavSearch;
