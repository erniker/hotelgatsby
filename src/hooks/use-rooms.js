import { graphql, useStaticQuery } from "gatsby"

const useRooms = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return data.allDatoCmsHabitacion.nodes.map(room => ({
    title: room.titulo,
    id: room.id,
    content: room.contenido,
    image: room.imagen,
    slug: room.slug,
  }))
}

export default useRooms
