import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import HotelImage from "../components/hotelImage"
import InitContent from "../components/initContent"
import RoomPreview from "../components/roomPreview"
import useRooms from "../hooks/use-rooms"

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const rooms = useRooms()
  return (
    <>
      <Layout>
        <HotelImage />
        <InitContent />
        <h2
          css={css`
            text-align: center;
            font-size: 3rem;
            margin-top: 5rem;
          `}
        >
          Nuestras habitaciones
        </h2>
        <RoomsList>
          {rooms.map(room => (
            <RoomPreview hey={room.id} room={room} />
          ))}
        </RoomsList>
      </Layout>
    </>
  )
}

export default IndexPage
