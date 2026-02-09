

function Personal() {
  return (
    <div className='personal-container'>
        <form action="">
            <h2>Personal Information</h2>
            <div className='input-group'>
              <label htmlFor="name">
                <span>Full Name:</span>
              </label>
              <input type="text" id="name" placeholder='Ex. John Doe' required />
            </div>

            <div className='input-group'>
              <label htmlFor="email">
                <span>Email Address:</span>
              </label>
              <input type="email" id="email" placeholder='Ex. john.doe@example.com' required />
            </div>

            <div className='input-group'>
              <label htmlFor="phone">
                <span>Phone Number:</span>
              </label>
              <input type="tel" id="phone" placeholder='Ex. +1 234 567 8901' required />
            </div>

            <div className='input-group'>
              <label htmlFor="address">
                <span>Address:</span>
              </label>
              <input type="text" id="address" placeholder='Ex. 123 Main St, City, Country' required />
            </div>

            <div className='input-group'>
              <label htmlFor="linkedin">
                <span>LinkedIn Profile:</span>
              </label>
              <input type="url" id="linkedin" placeholder='Ex. https://www.linkedin.com/in/username'/>
            </div>
        </form>

    </div>
  )
}

export default Personal;