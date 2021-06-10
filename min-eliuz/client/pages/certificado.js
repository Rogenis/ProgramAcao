// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://bff-service:3000/author-name')
    const data = await res.text()
   
    // Pass data to the page via props
    return { props: { data } }
  }
   
  export default function Home({ data }) {
    return <div style= {{border: '1px solid black', width: '50%', height: '50%'}}>
      <h1>CERTIFICADO DE CONCLUSÃO</h1>
      <p>Certificamos que:</p>
      {data} 
      <p>concluiu com sucesso a primeira semana do ProgramAção</p>
    </div>
  }