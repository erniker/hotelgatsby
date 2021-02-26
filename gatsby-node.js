exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)
  // console.log(result.data.allDatoCmsHabitacion.nodes)
  if (result.errors) {
    reporter.panic("There is not results", result.errors)
  }

  // If there is rooms
  const rooms = result.data.allDatoCmsHabitacion.nodes

  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve("./src/components/rooms.js"),
      context: {
        slug: room.slug,
      },
    })
  })
}
