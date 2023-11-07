const {body} = require('express-validator');

const validateArticulos = [
    body('name')
        .exists().withMessage("El nombre no puede estar vacio")
        .isString().withMessage("El nombre debe ser un texto")
        .isLength({ min: 3, max: 45}).withMessage("El nombre debe tener entre 3 y 45 caracteres")
        .notEmpty().withMessage('El nombre no puede estar vacio'),
    
    body('description')
        .exists().withMessage("La descripcion no puede estar vacia")
        .isString().withMessage("La descripcion debe ser un texto")
        .isLength({ min: 7, max: 999}).withMessage("La descripcion debe tener entre 7 y 999 caracteres")
        .notEmpty().withMessage('La descripcion no puede estar vacia'),

    body('price')
        .exists().withMessage("El precio no puede estar vacio")
        .isString().withMessage("El precio debe ser un texto")
        .isLength({ min: 1, max: 45}).withMessage("El precio debe tener entre 1 y 45 caracteres")
        .notEmpty().withMessage('El precio no puede estar vacio'),

    body('marca')
        .exists().withMessage("La marca no puede estar vacia")
        .isString().withMessage("La marca debe ser un texto")
        .isLength({ min: 1, max: 45}).withMessage("La marca debe tener entre 1 y 45 caracteres")
        .notEmpty().withMessage('La marca no puede estar vacia')
]

const validatePartialArticulos = [
    body('name')
    .optional(true)
    .isString().withMessage("El nombre debe ser un texto")
    .isLength({ min: 3, max: 45}).withMessage("El nombre debe tener entre 3 y 45 caracteres")
    .notEmpty().withMessage('El nombre no puede estar vacio'),
    
    body('description')
    .optional(true)
    .isString().withMessage("La descripcion debe ser un texto")
    .isLength({ min: 7, max: 999}).withMessage("La descripcion debe tener entre 7 y 999 caracteres")
    .notEmpty().withMessage('La descripcion no puede estar vacia'),

    body('price')
    .optional(true)
    .isString().withMessage("El precio debe ser un texto")
    .isLength({ min: 1, max: 45}).withMessage("El precio debe tener entre 1 y 45 caracteres")
    .notEmpty().withMessage('El precio no puede estar vacio'),

    body('marca')
    .optional(true)
    .isString().withMessage("La marca debe ser un texto")
    .isLength({ min: 1, max: 45}).withMessage("La marca debe tener entre 1 y 45 caracteres")
    .notEmpty().withMessage('La marca no puede estar vacia')
]

module.exports = {validateArticulos, validatePartialArticulos};