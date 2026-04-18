// ─── API konfiguráció ─────────────────────────────────────────────────────────
export const BASE = 'https://nodejs313.dszcbaross.edu.hu';

const API = `${BASE}/api`;

// ─── Segédfüggvény ────────────────────────────────────────────────────────────
const req = async (url, options = {}) => {
  const token = getCookie('token');
  const headers = { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers };
  const res = await fetch(url, { ...options, headers });
  return res;
};

// ─── Cookie segédfüggvények ───────────────────────────────────────────────────
export const setCookie = (name, value, days = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
};

export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// ─── Autók ───────────────────────────────────────────────────────────────────
export const getCars = async () => {
  const res = await fetch(`${API}/cars`);
  return res.json();
};

export const getCarById = async (id) => {
  const res = await fetch(`${API}/cars/${id}`);
  return res.json();
};

export const createCar = async (carData) => {
  const res = await req(`${API}/cars`, {
    method: 'POST',
    body: JSON.stringify(carData),
  });
  return res.json();
};

export const updateCar = async (id, carData) => {
  const res = await req(`${API}/cars/${id}`, {
    method: 'PUT',
    body: JSON.stringify(carData),
  });
  return res;
};

export const deleteCar = async (id) => {
  const res = await fetch(`${API}/cars/${id}`, { method: 'DELETE' });
  return res.json();
};

// ─── Képek ───────────────────────────────────────────────────────────────────
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('kep', file);
  const res = await fetch(`${API}/upload`, { method: 'POST', body: formData });
  return res.json();
};

export const deleteImage = async (filename) => {
  const res = await fetch(`${API}/upload/${filename}`, { method: 'DELETE' });
  return res.json();
};

export const getImages = async () => {
  const res = await fetch(`${API}/images`);
  return res.json();
};

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const login = async (email, password) => {
  const res = await fetch(`${API}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};