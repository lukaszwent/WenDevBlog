import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
	apiKey: 'AIzaSyCHlyQTGuRkEyf_51MC4Bm7GD3yNZrdqDk',
	authDomain: 'blog-93b34.firebaseapp.com',
	databaseURL:
		'https://blog-93b34-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'blog-93b34',
	storageBucket: 'blog-93b34.firebasestorage.app',
	messagingSenderId: '582991825018',
	appId: '1:582991825018:web:dbac96e157c74ac75193c3',
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideFirebaseApp(() => initializeApp(firebaseConfig)),
		provideFirestore(() => getFirestore()),
	],
};
