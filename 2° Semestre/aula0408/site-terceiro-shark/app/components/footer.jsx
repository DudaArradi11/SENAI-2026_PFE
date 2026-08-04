export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Todos os direitos reservados ao <span style={styles.highlight}>3B - Sesi de Mirandópolis</span>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'rgba(7, 15, 21, 0.9)',
    borderTop: '1px solid #005f73',
    padding: '1.5rem 1rem',
    textAlign: 'center',
    marginTop: 'auto',
    backdropFilter: 'blur(8px)',
  },
  text: {
    color: '#8E9AAF',
    fontSize: '0.9rem',
    margin: 0,
  },
  highlight: {
    color: '#00E5FF',
    fontWeight: 'bold',
  }
};