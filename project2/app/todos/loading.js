export default function TodosShimmer() {
      return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Welcome to Our Todos</h1>
          <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                style={{ width: '100%', height: '32px', backgroundColor: 'gray', borderRadius: '8px', animation: 'pulse 1.5s infinite' }}
              ></div>
            ))}
          </div>
          <style>
            {`
              @keyframes pulse {
                0% { opacity: 1; }
                50% { opacity: 0.5; }
                100% { opacity: 1; }
              }
            `}
          </style>
        </div>
      );
    }
    