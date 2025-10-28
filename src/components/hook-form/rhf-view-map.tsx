// rhf-map.tsx
'use client';

import Box from '@mui/material/Box';
import { FormLabel } from '@mui/material';
import { Map, Pin, APIProvider, AdvancedMarker } from '@vis.gl/react-google-maps';

import { MAP_ID, MAP_KEY, MAP_DEFAULT_ZOOM, MAP_DEFAULT_CENTER } from '../map/config-map';

interface Props {
  label?: string;
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
  markerPosition: { lat: number; lng: number };
  onMapClick?: (coords: { lat: number; lng: number }) => void;
}

export default function RHFViewMap({
  label,
  defaultCenter,
  defaultZoom,
  markerPosition,
  onMapClick,
}: Props) {
  return (
    <Box>
      {label && <FormLabel sx={{ mb: 0.5, display: 'block' }}>{label}</FormLabel>}
      <Box
        height="40rem"
        borderRadius={1}
        overflow="hidden"
        border={(theme) => `solid 1px ${theme.palette.divider}`}
      >
        <APIProvider apiKey={MAP_KEY}>
          <Box height="100%">
            <Map
              defaultCenter={defaultCenter || MAP_DEFAULT_CENTER}
              defaultZoom={defaultZoom ?? MAP_DEFAULT_ZOOM}
              disableDefaultUI
              mapId={MAP_ID}
              onClick={(e) => {
                if (!onMapClick) return;
                const coords = e.detail.latLng;
                if (coords?.lat != null && coords?.lng != null) {
                  onMapClick({ lat: coords.lat, lng: coords.lng });
                }
              }}
            >
              <AdvancedMarker position={markerPosition}>
                <Pin />
              </AdvancedMarker>
            </Map>
          </Box>
        </APIProvider>
      </Box>
    </Box>
  );
}
