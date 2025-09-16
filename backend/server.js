/*
const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const cors = require('cors');*/
import express from 'express';
import multer from 'multer';
import Tesseract from 'tesseract.js';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import cors from 'cors';


import { formatOCRText } from './functions/formatOCRText.js';

const app = express();
app.use(cors());

// Carpeta temporal para subir imágenes
const upload = multer({ dest: 'uploads/' });

// Endpoint GET de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando! Usa POST /procesar para subir imágenes.');
});

// Endpoint POST para procesar imagen
app.post('/procesar', upload.single('imagen'), async (req, res) => {
    if (!req.file) return res.status(400).send('No se subió ninguna imagen');

    const imagenPath = req.file.path;

    try {
        // OCR con Tesseract
        const { data: { text } } = await Tesseract.recognize(imagenPath, 'spa');

        // Formatear el texto antes de devolverlo
        const formattedText = formatOCRText(text);

        // Eliminar archivo temporal
        if (fs.existsSync(imagenPath)) fs.unlinkSync(imagenPath);

        // Devolver texto en JSON
        res.json({ text: formattedText });

    } catch (err) {
        if (fs.existsSync(imagenPath)) fs.unlinkSync(imagenPath);
        console.error(err);
        res.status(500).send('Error procesando la imagen');
    }
});


// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
