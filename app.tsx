// App.tsx
import { useRoutes } from 'react-router-dom'; // Make sure you are using react-router-dom
import routes from "tempo-routes"; // Import Tempo routes

// Tempo routes
{import.meta.env.VITE_TEMPO && useRoutes(routes)}

<Routes>
  <Route path="/some-route" element={<Home />} />
  
  // Add this before your catch-all route to capture tempo-specific routes
  {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
  
  <Route path="*" element={<Navigate to="login" />} />
</Routes>
