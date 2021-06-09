import { useState } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api'

import * as S from './style'

import * as data from '../../data/data-exemplo.json'
import DestinationDetails from '../DestinationDetails'
import Label from '../Label/Label'
import ServiceProviderDetails from '../ServiceProviderDetails'

import Image from '../../assets/images/customers-image.png'
import CustomerDetails from '../CustomerDetails'

const libraries = ['places']

const center = {
  lat: 45.4211,
  lng: -75.6903
}

const WrapperdMap = ({ mapContainerStyle }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDZ3LwmK5_dj0YoUXy8u_7NMU0o2u1Nvuk',
    libraries
  })
  const [selectedPark, setSelectedPark] = useState(null)

  if (loadError) return 'Error'
  if (!isLoaded) return 'Loading...'

  return (
    <div>
      <GoogleMap
        id="map"
        zoom={8}
        center={center}
        mapContainerStyle={mapContainerStyle}
      >
        {data.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0]
            }}
            onClick={() => setSelectedPark(park)}
            icon={{
              url: `/assets/icons/car.svg`,
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))}

        {selectedPark ? (
          <InfoWindow
            position={{
              lat: selectedPark.geometry.coordinates[1],
              lng: selectedPark.geometry.coordinates[0]
            }}
            onCloseClick={() => {
              setSelectedPark(null)
            }}
          >
            <div>
              <S.Container>
                <S.UserContainer>
                  <ServiceProviderDetails
                    image={Image}
                    name="Mark"
                    numberDeliveries="1000"
                  />
                  <S.Button />
                </S.UserContainer>

                <S.ProgressInformation>
                  <p>Progress</p>
                  <S.ProgressBar />
                </S.ProgressInformation>

                <DestinationDetails />

                <S.DeliveryInfo>
                  <Label>Delivery Infos</Label>
                  <div>
                    <div>
                      <p>
                        Requested in: <span>16 p.m</span>
                      </p>
                      <p>
                        Acepted in: <span>16:05 p.m</span>
                      </p>
                      <p>
                        Arrival in:1<span>6:25 p.m</span>{' '}
                      </p>
                      <p>
                        Delivery time: <span>20min</span>
                      </p>
                    </div>

                    <div>
                      <p>
                        Items: <span>$300</span>
                      </p>
                      <p>
                        Shipping: <span>$20.00</span>
                      </p>
                    </div>
                  </div>
                </S.DeliveryInfo>

                <div>
                  <Label>Customer</Label>
                  <S.UserContainer>
                    <CustomerDetails
                      Image={Image}
                      name="Avillar"
                      numberOrders="200"
                      isVisible={true}
                    />
                    <S.Button />
                  </S.UserContainer>
                </div>

                <S.ViewOrder href="/dashboard">View Order Details</S.ViewOrder>
              </S.Container>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  )
}

export default WrapperdMap
