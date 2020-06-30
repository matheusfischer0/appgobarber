import SecureLS from 'secure-ls';

async function setSecureLS(key: string, data: Object) {
  const ls = new SecureLS();
  ls.set(key, data);
}

function getSecureLS(key: string) {
  const ls = new SecureLS();
  const data = ls.get(key);
  return data;
}
function clearSecureLS(key: string): void {
  const ls = new SecureLS();
  ls.remove(key);
}

export { setSecureLS, getSecureLS, clearSecureLS };
