import React from 'react'; // Include React for JSX

export const services = [
  { title: "Technology Enthusiast", icon: 'https://shara7h.github.io/1/web.png' },
  { title: "Software Engineer", icon: 'https://shara7h.github.io/1/web.png' },
  { title: "Photographer", icon: 'https://shara7h.github.io/1/web.png' }
];

export const name = 'Sharath';

export const experiences = [
  {
    company: 'UniAthena',
    role: 'Basic Of Data Science',
    duration: '08 Oct 2024',
    logo: 'https://shara7h.github.io/1/R.jpg',
    points: [
      <img src="19.png" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://docs.uniathena.com/prod/course/certificate/117_1728405104_certificate.jpg'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: ''
  },{
    company: 'UniAthena',
    role: 'Basic of Python',
    duration: '03 Oct 2024',
    logo: 'https://shara7h.github.io/1/R.jpg',
    points: [
      <img src="18.png" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://docs.uniathena.com/prod/course/certificate/323_1727932682_certificate.jpg'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },
  {
    company: 'Great Learning',
    role: 'Face Detection with OpenCV in Python',
    duration: 'October 2024',
    logo: 'https://shara7h.github.io/1/gl.png',
    points: [
      <img src="17.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.mygreatlearning.com/certificate/STMXLISV'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },
  {
    company: 'Simpleilearn',
    role: 'Business Analytics  with Excel',
    duration: '29th aug,2024',
    logo: 'https://shara7h.github.io/1/sil.jpg',
    points: [
      <img src="20.png" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://simpli.app.link?%24identity_id=1361196736017778663&channel=whatsapp&feature=sharing&type=0&duration=0&source=android&data=eyIkb2dfdGl0bGUiOiJTaGFyYXRoIGhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkIHRoZSBCdXNpbmVzcyBBbmFseXRpY3Mgd2l0aCBFeGNlbCBvbmxpbmUgY291cnNlLiIsIiRjYW5vbmljYWxfaWRlbnRpZmllciI6IjczMzA3MTYiLCIkb2dfZGVzY3JpcHRpb24iOiJMZWFybiB0b2RheSdzIG1vc3QgaW4tZGVtYW5kIHNraWxscyBmb3IgZnJlZSBhdCBTa2lsbFVwIGJ5IFNpbXBsaWxlYXJuLiIsIiRvZ19pbWFnZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl83MzMwNzE2XzE3MjUwOTMyNDQucG5nIiwiJHB1YmxpY2x5X2luZGV4YWJsZSI6InRydWUiLCIkZGVza3RvcF91cmwiOiJodHRwczpcL1wvd3d3LnNpbXBsaWxlYXJuLmNvbVwvc2tpbGx1cC1jZXJ0aWZpY2F0ZS1sYW5kaW5nP3Rva2VuPWV5SmpiM1Z5YzJWZmFXUWlPaUkyTmpRaUxDSmpaWEowYVdacFkyRjBaVjkxY213aU9pSm9kSFJ3Y3pwY0wxd3ZZMlZ5ZEdsbWFXTmhkR1Z6TG5OcGJYQnNhV05rYmk1dVpYUmNMM05vWVhKbFhDOTBhSFZ0WWw4M016TXdOekUyWHpFM01qVXdPVE15TkRRdWNHNW5JaXdpZFhObGNtNWhiV1VpT2lKVGFHRnlZWFJvSW4wJnV0bV9zb3VyY2U9c2hhcmVkLWNlcnRpZmljYXRlJnV0bV9tZWRpdW09YXBwX2xtcyZ1dG1fY2FtcGFpZ249c2hhcmVkLWNlcnRpZmljYXRlLXByb21vdGlvbiZyZWZlcnJlcj1odHRwcyUzQSUyRiUyRmNlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0JTJGc2hhcmUlMkZ0aHVtYl83MzMwNzE2XzE3MjUwOTMyNDQucG5nIiwiJGFuZHJvaWRfdXJsIjoiaHR0cHM6XC9cL3d3dy5zaW1wbGlsZWFybi5jb21cL3NraWxsdXAtY2VydGlmaWNhdGUtbGFuZGluZz90b2tlbj1leUpqYjNWeWMyVmZhV1FpT2lJMk5qUWlMQ0pqWlhKMGFXWnBZMkYwWlY5MWNtd2lPaUpvZEhSd2N6cGNMMXd2WTJWeWRHbG1hV05oZEdWekxuTnBiWEJzYVdOa2JpNXVaWFJjTDNOb1lYSmxYQzkwYUhWdFlsODNNek13TnpFMlh6RTNNalV3T1RNeU5EUXVjRzVuSWl3aWRYTmxjbTVoYldVaU9pSlRhR0Z5WVhSb0luMCZ1dG1fc291cmNlPXNoYXJlZC1jZXJ0aWZpY2F0ZSZ1dG1fbWVkaXVtPWFwcF9sbXMmdXRtX2NhbXBhaWduPXNoYXJlZC1jZXJ0aWZpY2F0ZS1wcm9tb3Rpb24mcmVmZXJyZXI9aHR0cHMlM0ElMkYlMkZjZXJ0aWZpY2F0ZXMuc2ltcGxpY2RuLm5ldCUyRnNoYXJlJTJGdGh1bWJfNzMzMDcxNl8xNzI1MDkzMjQ0LnBuZyIsInNvdXJjZSI6ImFuZHJvaWQifQ%3D%3D'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },
  {
    company: 'Udemy',
    role: 'R Programming',
    duration: 'Sept. 8,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="15.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-0da8d366-34cd-489a-aac1-8a7c5249f42e/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },
  {
    company: 'Eduonix',
    role: 'Learn HTML5 D and D Image Uploader',
    duration: 'September 17,2024',
    logo: 'https://shara7h.github.io/1/e.png',
    points: [
      <img src="14.jpeg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.eduonix.com/certificate/6ad81a6eb4'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Eduonix',
    role: 'R Programming For Absolute Beginners',
    duration: 'September 11,2024',
    logo: 'https://shara7h.github.io/1/e.png',
    points: [
      <img src="13.jpeg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.eduonix.com/certificate/b624d26234'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Eduonix',
    role: 'WordPress Plugin Development',
    duration: 'September 14,2024',
    logo: 'https://shara7h.github.io/1/e.png',
    points: [
      <img src="12.jpeg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.eduonix.com/certificate/809a5520e0'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'CSS Crash Course For Beginners',
    duration: 'Aug. 1,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="11.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-1287c0de-3184-4b5d-8f8f-ea7909f903e5/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button> 
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'Excel files with Python',
    duration: 'Aug. 10,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="10.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-2b855052-e7a2-4358-ada0-57ccd4286e84/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'Practical HTML,CSS,JS',
    duration: 'Aug. 1,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="9.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-dfbd3f90-664f-42c7-a3a5-105fe5a7b48a/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'MS Word ',
    duration: 'July 16,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="8.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-59f15a6b-49f6-4253-b4df-630be5df0241/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'Ethicall Hack',
    duration: 'June 7,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="7.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-d151df1b-4c14-49e8-b3a8-fa7ffac98efc/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'Advance Python Programming',
    duration: 'June 24,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="6.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-bb5a2e6f-e156-4d9c-99f3-27acddd6f81a/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },
  {
    company: 'Udemy',
    role: 'Python Demonstration',
    duration: 'June 24,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="5.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-fe440338-09d5-40f0-9b7c-cfffeb19bce4/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'Ethically Hacking',
    duration: 'April 6,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="4.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-11b1cac2-78a8-4647-b386-8badaa18bb7c/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },
  {
    company: 'Udemy',
    role: 'Ethical Hacking',
    duration: 'April 11,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="3.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-7d1d6ae7-7ba5-4275-ad28-a02a4e392e9f/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },{
    company: 'Udemy',
    role: 'Professional Diploma in Python ',
    duration: 'April 6,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="2.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-8cf0896c-91ff-4f51-a420-1d5647f2872b/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  },
  {
    company: 'Udemy',
    role: 'Python For Beginers',
    duration: 'March 17,2024',
    logo: 'https://shara7h.github.io/1/udemy.jpg',
    points: [
      <img src="1.jpg" alt="description of image" />,
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={() => window.location.href = 'https://www.udemy.com/certificate/UC-e99ef2e1-d166-49cb-958f-118c950d58d6/'}
          style={{
            backgroundColor: '#1d1836',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d1836'}
        >
          Verify
        </button>
      </div>
    ],
    url: 'https://inncircles.com/#home'
  }
];

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
