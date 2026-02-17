function Personal() {
  return (
    <>
      <form action="">
        <div className='input-group'>
          <label htmlFor="name">
            <span>Full Name:</span>
          </label>
          <input type="text" id="name" placeholder='Ex. John Doe' required />
        </div>

        <div className='input-group'>
          <label htmlFor="title">
            <span>Title:</span>
          </label>
          <input type="text" id="title" placeholder='Ex. Software Engineer' required />
        </div>

        <div className='input-group'>
          <label htmlFor="email">
            <span>Email:</span>
          </label>
          <input type="email" id="email" placeholder='Ex. john.doe@example.com' required />
        </div>

        <div className='input-group'>
          <label htmlFor="phone">
            <span>Phone:</span>
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
            <span>LinkedIn:</span>
          </label>
          <input type="url" id="linkedin" placeholder='Ex. https://www.linkedin.com/in/username'/>
        </div>
      </form>
    </>
  )
}

export default Personal;