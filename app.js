

const distributors = [
  'FERNANDO MARNOVA',
  'MACASA',
  'CIBEIRA',
  'ATLANTA',
  'OBLANCA',
  'POLLO SADA',
  'SEOANE RODICIO',
  'FRUTAS TABOADA',
  'FINDUS',
  'REBOLLO',
  'ALASKA',
  'AS BURGAS',
  'CUQUEJO',
  'DISBEGÓN CARLOS',
  'YOLANDA LAGO',
  'PERLAMARCOMERCIAL',
  'DOCAMPO',
  'FANDICOSTA',
  'G ALVAREZ',
  'ACEITUNERO',
  'DARLIM',
  'PABLO DISTR COLA/AGUA',
  'JOFISA',
  'DISTRIOR COMERCIAL',
  'DIFAMER JOSE',
  'PRISMA'
]
const Products = [
  { id: 1, name: 'MOZZARELLA PIZZA', distributor: 'FERNANDO MARNOVA' },
  { id: 2, name: 'RECORTES SALMON', distributor: 'FERNANDO MARNOVA' },
  { id: 3, name: 'MIX 4 QUESOS', distributor: 'FERNANDO MARNOVA' },
  { id: 4, name: 'PECHUGA PAVO', distributor: 'FERNANDO MARNOVA' },
  { id: 5, name: 'KEBAB', distributor: 'FERNANDO MARNOVA' },
  { id: 6, name: 'NATA PRESIDENT', distributor: 'FERNANDO MARNOVA' },
  { id: 7, name: 'MOZZARELA BARRA', distributor: 'FERNANDO MARNOVA' },
  { id: 8, name: 'PIEZA QUESO AZUL', distributor: 'FERNANDO MARNOVA' },
  { id: 9, name: 'BARRA EDAM', distributor: 'MACASA' },
  { id: 10, name: 'CARRILLERAS CONGELADAS', distributor: 'MACASA' },
  { id: 11, name: 'LASAÑA DE CARNE', distributor: 'CIBEIRA' },
  { id: 12, name: 'CANELONES DE CARNE', distributor: 'CIBEIRA' },
  { id: 13, name: 'CROQUETAS DE POLLO', distributor: 'CIBEIRA' },
  { id: 14, name: 'POP DOTS SUGAR', distributor: 'CIBEIRA' },
  { id: 15, name: 'POP DOTS CHOCO', distributor: 'CIBEIRA' },
  { id: 16, name: 'CHUTNEY MANGO (WOK)', distributor: 'ATLANTA' },
  { id: 17, name: 'GUACAMOLE SUAVE CONG', distributor: 'ATLANTA' },
  { id: 18, name: 'NACHO CRUDO GIGANTE', distributor: 'ATLANTA' },
  { id: 19, name: 'SIROPE DULCE LECHE	', distributor: 'ATLANTA' },
  { id: 20, name: 'SALSA DE OSTRAS', distributor: 'ATLANTA' },
  { id: 21, name: 'NOODLES JUMBO', distributor: 'ATLANTA' },
  { id: 22, name: 'SALSA BARBACOA ATLANTA	', distributor: 'ATLANTA' },
  { id: 23, name: 'AGUACATE CONGELADO', distributor: 'OBLANCA' },
  { id: 24, name: 'PATATA GAJO ESPECIADA', distributor: 'OBLANCA' },
  { id: 25, name: 'MINI ROLLITO PRIMAVERA', distributor: 'OBLANCA' },
  { id: 26, name: 'BOLLO PREÑADO', distributor: 'OBLANCA' },
  { id: 27, name: 'CHORICITO APERITIVO', distributor: 'OBLANCA' },
  { id: 28, name: 'MINI CROQUETAS JAMÓN', distributor: 'OBLANCA' },
  { id: 29, name: 'SABROSO A LA ROMANA', distributor: 'OBLANCA' },
  { id: 30, name: 'RUEDA MERLUZA A LA ROMANA', distributor: 'OBLANCA' },
  { id: 31, name: 'MINI HAMBURGUESAS', distributor: 'OBLANCA' },
  { id: 32, name: 'BOQUERONES CONGELADOS', distributor: 'OBLANCA' },
  { id: 33, name: 'CORDON BLEU', distributor: 'OBLANCA' },
  { id: 34, name: 'CONGRIO CAJA', distributor: 'OBLANCA' },
  { id: 35, name: 'SOLOMILLO CERDO', distributor: 'OBLANCA' },
  { id: 36, name: 'ABADEJO CON BROCOLI', distributor: 'OBLANCA' },
  { id: 37, name: 'CHULETA PAVO AJILLO', distributor: 'OBLANCA' },
  { id: 38, name: 'PARRILLADA VERDURAS', distributor: 'OBLANCA' },
  { id: 39, name: 'QUESO SEMICU OBLANCA', distributor: 'OBLANCA' },
  { id: 40, name: 'MEMBRILLO', distributor: 'OBLANCA' },
  { id: 41, name: 'SARDINAS EN ACEITE LATA', distributor: 'OBLANCA' },
  { id: 42, name: 'CAZÓN EN PORCIONES', distributor: 'OBLANCA' },
  { id: 43, name: 'FILETE SARDINA', distributor: 'OBLANCA' },
  { id: 44, name: 'BASE TORTILLA', distributor: 'OBLANCA' },
  { id: 45, name: 'ALA B PARTIDA', distributor: 'POLLO SADA' },
  { id: 46, name: 'NATA FESTIPACK', distributor: 'SEOANE RODICIO' },
  { id: 47, name: 'MIX VEGETAL', distributor: 'SEOANE RODICIO' },
  { id: 48, name: 'PLANCHA HOJALDRE CAJA', distributor: 'SEOANE RODICIO' },
  { id: 49, name: 'VOLOVANES 55MM', distributor: 'SEOANE RODICIO' },
  { id: 50, name: 'TARTALETA DULCE 49MM', distributor: 'SEOANE RODICIO' },
  { id: 51, name: 'TARTALETA SALADA 49MM', distributor: 'SEOANE RODICIO' },
  { id: 52, name: 'GELATINA NEUTRA LAMINAS', distributor: 'SEOANE RODICIO' },
  { id: 53, name: 'MINI CROISSANT', distributor: 'SEOANE RODICIO' },
  { id: 54, name: 'YOGURT NATURAL', distributor: 'SEOANE RODICIO' },
  { id: 55, name: 'BASTÓN', distributor: 'FRUTAS TABOADA' },
  { id: 56, name: 'CUADROS', distributor: 'FRUTAS TABOADA' },
  { id: 57, name: 'PANADERA	', distributor: 'FRUTAS TABOADA' },
  { id: 58, name: 'ENTERA	', distributor: 'FRUTAS TABOADA' },
  { id: 59, name: 'SALTEADO THAI', distributor: 'FINDUS' },
  { id: 60, name: 'SALTEADO MEDITERRANEO', distributor: 'FINDUS' },
  { id: 61, name: 'SALTEADO MERIDIONAL', distributor: 'FINDUS' },
  { id: 62, name: 'SALTEADO TRADICIONAL', distributor: 'FINDUS' },
  { id: 63, name: 'SALTEADO PRIMAVERA', distributor: 'FINDUS' },
  { id: 64, name: 'SALTEADO CAMPERO', distributor: 'FINDUS' },
  { id: 65, name: 'GUISANTES', distributor: 'FINDUS' },
  { id: 66, name: 'FRUTOS ROJOS', distributor: 'FINDUS' },
  { id: 67, name: 'LECHE ENTERA', distributor: 'REBOLLO' },
  { id: 68, name: 'QUESO EN POLVO BOLSA 1 KG', distributor: 'REBOLLO' },
  { id: 69, name: 'ANCHOAS', distributor: 'REBOLLO' },
  { id: 70, name: 'PIMIENTO ROJO EN TIRAS', distributor: 'REBOLLO' },
  { id: 71, name: 'LECHE GRAN CREME', distributor: 'REBOLLO' },
  { id: 72, name: 'HUEVINA', distributor: 'REBOLLO' },
  { id: 73, name: 'HUEVOS M', distributor: 'REBOLLO' },
  { id: 74, name: 'AZUCAR', distributor: 'REBOLLO' },
  { id: 75, name: 'FUSILLONI', distributor: 'REBOLLO' },
  { id: 76, name: 'PIMENTON DE LA VERA', distributor: 'REBOLLO' },
  { id: 77, name: 'COLORANTE CARMENCITA', distributor: 'REBOLLO' },
  { id: 78, name: 'TABASCO', distributor: 'REBOLLO' },
  { id: 79, name: 'NAVAJAS', distributor: 'ALASKA' },
  { id: 80, name: 'CONOS FRESA-NATA', distributor: 'ALASKA' },
  { id: 81, name: 'CONOS NATA-TURRON', distributor: 'ALASKA' },
  { id: 82, name: 'CONOS CHOCO-VAINILLA', distributor: 'ALASKA' },
  { id: 83, name: 'HELADO BOMBON', distributor: 'ALASKA' },
  { id: 84, name: '2 MITADES LOMO ADOBADO', distributor: 'AS BURGAS' },
  { id: 85, name: 'BACÓN', distributor: 'CUQUEJO' },
  { id: 86, name: 'YORK', distributor: 'CUQUEJO' },
  { id: 87, name: 'SALCHICHON CULAR', distributor: 'CUQUEJO' },
  { id: 88, name: 'CHORIZO VELA', distributor: 'CUQUEJO' },
  { id: 89, name: 'PEPPERONI', distributor: 'CUQUEJO' },
  { id: 90, name: 'CENTRO JAMÓN DESHUESADO', distributor: 'CUQUEJO' },
  { id: 91, name: 'ACEITE FREIDORA', distributor: 'DISBEGÓN CARLOS' },
  { id: 92, name: 'GARRAFA ACEITE OLIVA SALA', distributor: 'DISBEGÓN CARLOS' },
  { id: 93, name: 'GARRAFA VINAGRE SALA', distributor: 'DISBEGÓN CARLOS' },
  { id: 94, name: 'PUNTAS COSTILLA', distributor: 'YOLANDA LAGO' },
  { id: 95, name: 'SOLOMILLO POLLO EMPANADO', distributor: 'YOLANDA LAGO' },
  { id: 96, name: 'ALBÓNDIGAS', distributor: 'YOLANDA LAGO' },
  { id: 97, name: 'ROTTI PAVO', distributor: 'YOLANDA LAGO' },
  { id: 98, name: 'OSSOBUCO PAVO', distributor: 'YOLANDA LAGO' },
  { id: 99, name: 'SALCHICHA GRANDE', distributor: 'YOLANDA LAGO' },
  { id: 100, name: 'CINTA LOMO', distributor: 'YOLANDA LAGO' },
  { id: 101, name: 'TULIPAS POLLO', distributor: 'YOLANDA LAGO' },
  { id: 102, name: 'TINGA POLLO', distributor: 'YOLANDA LAGO' },
  { id: 103, name: 'AROS DE CEBOLLA', distributor: "PERLAMARCOMERCIAL" },
  { id: 104, name: 'BUÑUELOS BACALAO', distributor: "PERLAMARCOMERCIAL" },
  { id: 105, name: 'GAMBA REBOZADA', distributor: "PERLAMARCOMERCIAL" },
  { id: 106, name: 'NUGGETS POLLO', distributor: "PERLAMARCOMERCIAL" },
  { id: 107, name: 'GAMBA PELADA', distributor: "PERLAMARCOMERCIAL" },
  { id: 108, name: 'PROFITEROLES NATA', distributor: "PERLAMARCOMERCIAL" },
  { id: 109, name: 'ENTRECOT', distributor: "PERLAMARCOMERCIAL" },
  { id: 110, name: 'ESCALOPINES EMPANADOS', distributor: "PERLAMARCOMERCIAL" },
  { id: 111, name: 'POTA TROCEADA', distributor: "PERLAMARCOMERCIAL" },
  { id: 112, name: 'TARTA FRAMBUESA', distributor: "PERLAMARCOMERCIAL" },
  { id: 113, name: 'TARTA TIRAMISÚ', distributor: "PERLAMARCOMERCIAL" },
  { id: 114, name: 'TARTA SAN MARCOS', distributor: "PERLAMARCOMERCIAL" },
  { id: 115, name: 'TARTA LIMÓN', distributor: "PERLAMARCOMERCIAL" },
  { id: 116, name: 'TARTA SELVA NEGRA', distributor: "PERLAMARCOMERCIAL" },
  { id: 117, name: 'TARTA ORUJO', distributor: "PERLAMARCOMERCIAL" },
  { id: 118, name: 'TARTA SELVA BLANCA', distributor: "PERLAMARCOMERCIAL" },
  { id: 119, name: 'TARTA CHOCO-GALLETA', distributor: "PERLAMARCOMERCIAL" },
  { id: 120, name: 'ACEITUNA NEGRA', distributor: 'DOCAMPO' },
  { id: 121, name: 'ACEITUNA VERDE', distributor: 'DOCAMPO' },
  { id: 122, name: 'FIDEUÁ', distributor: 'DOCAMPO' },
  { id: 123, name: 'ARROZ VAPORIZADO 1 KG', distributor: 'DOCAMPO' },
  { id: 124, name: 'FUSSILLI BLANCO 5KG', distributor: 'DOCAMPO' },
  { id: 125, name: 'FUSSILLI COLORES 5KG', distributor: 'DOCAMPO' },
  { id: 126, name: 'FARFALLE 5KG (PAJARITAS)', distributor: 'DOCAMPO' },
  { id: 127, name: 'MARGARITAS 5KG', distributor: 'DOCAMPO' },
  { id: 128, name: 'TIBURONES 5KG', distributor: 'DOCAMPO' },
  { id: 129, name: 'PLUMAS 5KG', distributor: 'DOCAMPO' },
  { id: 130, name: 'SAL FINA 1KG', distributor: 'DOCAMPO' },
  { id: 131, name: 'SAL GRUESA 1KG', distributor: 'DOCAMPO' },
  { id: 132, name: 'VINAGRE MODENA 5L', distributor: 'DOCAMPO' },
  { id: 133, name: 'KETCHUP 2KG', distributor: 'DOCAMPO' },
  { id: 134, name: 'MOSTAZA 2KG', distributor: 'DOCAMPO' },
  { id: 135, name: 'MAYONESA CUBO', distributor: 'DOCAMPO' },
  { id: 136, name: 'KETCHUP  300GR', distributor: 'DOCAMPO' },
  { id: 137, name: 'MAYONESA 300GR', distributor: 'DOCAMPO' },
  { id: 138, name: 'GELATINA FRESA', distributor: 'DOCAMPO' },
  { id: 139, name: 'GELATINA LIMON', distributor: 'DOCAMPO' },
  { id: 140, name: 'GELATINA NARANJA', distributor: 'DOCAMPO' },
  { id: 141, name: 'MOUSSE FRESA', distributor: 'DOCAMPO' },
  { id: 142, name: 'MOUSSE LIMÓN', distributor: 'DOCAMPO' },
  { id: 143, name: 'MOUSSE MOKA', distributor: 'DOCAMPO' },
  { id: 144, name: 'PIMIENTA BLANCA MOLIDA', distributor: 'DOCAMPO' },
  { id: 145, name: 'PIMIENTA NEGRA MOLIDA', distributor: 'DOCAMPO' },
  { id: 146, name: 'CAYENA', distributor: 'DOCAMPO' },
  { id: 147, name: 'PEREJIL HOJA', distributor: 'DOCAMPO' },
  { id: 148, name: 'CANELA MOLIDA', distributor: 'DOCAMPO' },
  { id: 149, name: 'CANELA RAMA', distributor: 'DOCAMPO' },
  { id: 150, name: 'ALBAHACA', distributor: 'DOCAMPO' },
  { id: 151, name: 'TOMILLO', distributor: 'DOCAMPO' },
  { id: 152, name: 'CURRY', distributor: 'DOCAMPO' },
  { id: 153, name: 'PIMENTÓN DULCE', distributor: 'DOCAMPO' },
  { id: 154, name: 'PIMENTÓN PICANTE', distributor: 'DOCAMPO' },
  { id: 155, name: 'PIMIENTA NEGRA GRANO', distributor: 'DOCAMPO' },
  { id: 156, name: 'ROMERO', distributor: 'DOCAMPO' },
  { id: 157, name: 'UVAS PASAS', distributor: 'DOCAMPO' },
  { id: 158, name: 'FLAN', distributor: 'DOCAMPO' },
  { id: 159, name: 'OREGANO', distributor: 'DOCAMPO' },
  { id: 160, name: 'SALSA PIZZA', distributor: 'DOCAMPO' },
  { id: 161, name: 'PIQUILLOS', distributor: 'DOCAMPO' },
  { id: 162, name: 'COCKTAIL FRUTAS', distributor: 'DOCAMPO' },
  { id: 163, name: 'PERA EN ALMIBAR', distributor: 'DOCAMPO' },
  { id: 164, name: 'AJO GRANULADO', distributor: 'DOCAMPO' },
  { id: 165, name: 'VINAGRE BLANCO', distributor: 'DOCAMPO' },
  { id: 166, name: 'PAN RALLADO 5KG', distributor: 'DOCAMPO' },
  { id: 167, name: 'ALUBIA COCIDA', distributor: 'DOCAMPO' },
  { id: 168, name: 'GARBANZO COCIDO', distributor: 'DOCAMPO' },
  { id: 169, name: 'NUEZ MOSCADA', distributor: 'DOCAMPO' },
  { id: 170, name: 'SPAGUETTI', distributor: 'DOCAMPO' },
  { id: 171, name: '5 PIMIENTAS', distributor: 'DOCAMPO' },
  { id: 172, name: 'LENTEJAS FRASCOS', distributor: 'DOCAMPO' },
  { id: 173, name: 'FINAS HIERBAS', distributor: 'DOCAMPO' },
  { id: 174, name: 'LAUREL', distributor: 'DOCAMPO' },
  { id: 175, name: 'JAMONCITOS POLLO', distributor: 'FANDICOSTA' },
  { id: 176, name: 'COLES', distributor: 'FANDICOSTA' },
  { id: 177, name: 'ESPINACAS', distributor: 'FANDICOSTA' },
  { id: 178, name: 'JUDIA REDONDA', distributor: 'FANDICOSTA' },
  { id: 179, name: 'COLIFLOR', distributor: 'FANDICOSTA' },
  { id: 180, name: 'BRÓCOLI', distributor: 'FANDICOSTA' },
  { id: 181, name: 'SALTEADO SETAS', distributor: 'FANDICOSTA' },
  { id: 182, name: 'PIQUILLOS RELLENOS BACALAO', distributor: 'FANDICOSTA' },
  { id: 183, name: 'GULAS', distributor: 'FANDICOSTA' },
  { id: 184, name: 'LANGOSTINO 7,90€', distributor: 'FANDICOSTA' },
  { id: 185, name: 'LANGOSTINO 5€', distributor: 'FANDICOSTA' },
  { id: 186, name: 'ALMEJAS', distributor: 'FANDICOSTA' },
  { id: 187, name: 'ARROZ 3 DELICIAS', distributor: 'FANDICOSTA' },
  { id: 188, name: 'CARNE MEJILLON LIMPIO', distributor: 'FANDICOSTA' },
  { id: 189, name: 'RAYA', distributor: 'FANDICOSTA' },
  { id: 190, name: 'GALLO', distributor: 'FANDICOSTA' },
  { id: 191, name: 'RODAJA MERLUZA', distributor: 'FANDICOSTA' },
  { id: 192, name: 'RODAJA MARRAJO', distributor: 'FANDICOSTA' },
  { id: 193, name: 'FILETE MARUCA', distributor: 'FANDICOSTA' },
  { id: 194, name: 'FILETE TILAPIA', distributor: 'FANDICOSTA' },
  { id: 195, name: 'LOMO CAELLA', distributor: 'FANDICOSTA' },
  { id: 196, name: 'PALITOS DE CANGREJO', distributor: 'FANDICOSTA' },
  { id: 197, name: 'ENSALADILLA', distributor: 'FANDICOSTA' },
  { id: 198, name: 'PATATA CRINKLE', distributor: 'FANDICOSTA' },
  { id: 199, name: 'PATATA STEAK HOUSE', distributor: 'FANDICOSTA' },
  { id: 200, name: 'MINI SAN JACOBOS', distributor: 'FANDICOSTA' },
  { id: 201, name: 'MINI EMPANADILLAS ATÚN', distributor: 'FANDICOSTA' },
  { id: 202, name: 'VARITAS MERLUZA', distributor: 'FANDICOSTA' },
  { id: 203, name: 'VINO BLANCO COCINA', distributor: 'G ALVAREZ' },
  { id: 204, name: 'VINO TINTO COCINA', distributor: 'G ALVAREZ' },
  { id: 205, name: 'ALBAR', distributor: 'G ALVAREZ' },
  { id: 206, name: 'RECTORAL DE AMANDI', distributor: 'G ALVAREZ' },
  { id: 207, name: 'TOMATE FRITO 6X3', distributor: 'ACEITUNERO' },
  { id: 208, name: 'ACEITE GIRASOL 3X5', distributor: 'ACEITUNERO' },
  { id: 209, name: 'SIROPE CHOCOLATE', distributor: 'ACEITUNERO' },
  { id: 210, name: 'SIROPE FRESA', distributor: 'ACEITUNERO' },
  { id: 211, name: 'SIROPE CARAMELO', distributor: 'ACEITUNERO' },
  { id: 212, name: 'ATÚN', distributor: 'ACEITUNERO' },
  { id: 213, name: 'PIÑA EN SU JUGO', distributor: 'ACEITUNERO' },
  { id: 214, name: 'MELOCOTÓN EN ALMIBAR', distributor: 'ACEITUNERO' },
  { id: 215, name: 'ESPÁRRAGO VERDE', distributor: 'ACEITUNERO' },
  { id: 216, name: 'ESPÁRRAGO BLANCO', distributor: 'ACEITUNERO' },
  { id: 217, name: 'BROTES DE SOJA', distributor: 'ACEITUNERO' },
  { id: 218, name: 'MAÍZ', distributor: 'ACEITUNERO' },
  { id: 219, name: 'CHAMPIÑÓN ENTERO', distributor: 'ACEITUNERO' },
  { id: 220, name: 'CHAMPIÑÓN LAMINADO', distributor: 'ACEITUNERO' },
  { id: 221, name: 'ZANAHORIA RALLADA', distributor: 'ACEITUNERO' },
  { id: 222, name: 'REMOLACHA RALLADA', distributor: 'ACEITUNERO' },
  { id: 223, name: 'NUEZ PELADA', distributor: 'ACEITUNERO' },
  { id: 224, name: 'ACEITE OLIVA ORUJO 5X3', distributor: 'ACEITUNERO' },
  { id: 225, name: 'CUBO QUESO CHEDDAR', distributor: 'ACEITUNERO' },
  { id: 226, name: 'ACEITE MONODOSIS', distributor: 'ACEITUNERO' },
  { id: 227, name: 'VINAGRE MONODOSIS', distributor: 'ACEITUNERO' },
  { id: 228, name: 'MAYONESA MONODOSIS', distributor: 'ACEITUNERO' },
  { id: 229, name: 'KETCHUP MONODOSIS', distributor: 'ACEITUNERO' },
  { id: 230, name: 'SAL MONODOSIS', distributor: 'ACEITUNERO' },
  { id: 231, name: 'SERVILLETAS', distributor: 'DARLIM' },
  { id: 232, name: 'MANTELES', distributor: 'DARLIM' },
  { id: 233, name: 'AGUA', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 234, name: 'AGUA CON GAS', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 235, name: 'AGUA PERSONAL', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 236, name: 'AGUA LLEVAR', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 237, name: 'COCA COLA', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 238, name: 'COCA COLA ZERO', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 239, name: 'COCA COLA LIGHT', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 240, name: 'COCA COLA ZERO ZERO', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 241, name: 'FANTA NARANJA', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 242, name: 'FANTA LIMÓN', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 243, name: 'AQUARIUS NARANJA', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 244, name: 'AQUARIUS LIMÓN', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 245, name: 'NESTEA', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 246, name: 'SPRITE', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 247, name: 'CERVEZA SIN ALCOHOL', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 248, name: 'BARRIL ESTRELLA', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 249, name: 'BARRIL 1906', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 250, name: 'BOMBONA GRIFO', distributor: 'PABLO DISTR COLA/AGUA' },
  { id: 251, name: 'BALLETAS VERDES', distributor: 'JOFISA' },
  { id: 252, name: 'PACK BOBINA PAPEL', distributor: 'JOFISA' },
  { id: 253, name: 'LAVAVAJILLAS MANUAL', distributor: 'JOFISA' },
  { id: 254, name: 'LAVAVAJILLAS MAQUINA', distributor: 'JOFISA' },
  { id: 255, name: 'ABRILLANTADOR MAQUINA', distributor: 'JOFISA' },
  { id: 256, name: 'FREGONA GRANDE', distributor: 'JOFISA' },
  { id: 257, name: 'LEJIA', distributor: 'JOFISA' },
  { id: 258, name: 'BROCHETAS 15 CM', distributor: 'JOFISA' },
  { id: 259, name: 'ROLL DRAP', distributor: 'JOFISA' },
  { id: 260, name: 'GUANTES VINILO M', distributor: 'JOFISA' },
  { id: 261, name: 'GUANTES VINILO L', distributor: 'JOFISA' },
  { id: 262, name: 'GUANTES FREGADERO', distributor: 'JOFISA' },
  { id: 263, name: 'SACOS BASURA GRANDES', distributor: 'JOFISA' },
  { id: 264, name: 'EMBALAJE TAKE AWAY E/650', distributor: 'JOFISA' },
  { id: 265, name: 'TAPAS TAKE AWAY E/650', distributor: 'JOFISA' },
  { id: 266, name: 'FRIEGASUELOS INSECTICIDA', distributor: 'JOFISA' },
  { id: 267, name: 'BOLSA BASURA PEQUEÑA', distributor: 'JOFISA' },
  { id: 268, name: 'SOLOMILLO', distributor: 'MACASA' },
  { id: 269, name: 'CRIOLLO', distributor: 'CUQUEJO' },
  { id: 270, name: 'HARINA 5KG', distributor: 'DISTRIOR COMERCIAL' },
  { id: 271, name: 'ALCORTA', distributor: 'DISTRIOR COMERCIAL' },
  { id: 272, name: 'ALCORTA 3/8', distributor: 'DISTRIOR COMERCIAL' },
  { id: 273, name: 'BRANDY DECANO', distributor: 'DISTRIOR COMERCIAL' },
  { id: 274, name: 'CACAHUETE PELADO', distributor: 'DISTRIOR COMERCIAL' },
  { id: 275, name: 'ZUMO MELOCOTÓN', distributor: 'DISTRIOR COMERCIAL' },
  { id: 276, name: 'ZUMO PIÑA', distributor: 'DISTRIOR COMERCIAL' },
  { id: 277, name: 'PAPEL FIELD', distributor: 'JOFISAL' },
  { id: 278, name: 'FINCA LAVANDEIRA', distributor: 'DIFAMER' },
  { id: 279, name: 'ACEITE FREIDORA', distributor: 'ACEITUNERO' },
  { id: 280, name: 'TORTILLAS TRIGO 25CM', distributor: 'PRISMA' },
  { id: 281, name: 'TORTILLAS TRIGO 12CM', distributor: 'PRISMA' },
  { id: 282, name: 'TORTILLAS MAÍZ 12CM', distributor: 'PRISMA' },
  { id: 283, name: 'SALSA CHIPOTLE LATA', distributor: 'PRISMA' },
  { id: 284, name: 'SAZONADOR TACOS/FAJITAS', distributor: 'PRISMA' },
  { id: 285, name: 'FRIJOLES ENTEROS LATA', distributor: 'PRISMA' },
]

let distributorABC = [...distributors.sort()]
showBtnDistributors(distributorABC)
const btnDistributors = getElementsWithClassname('distributor')
insertEventOnButtons(btnDistributors)


function showBtnDistributors (distributors) {
  for (let distributor of distributors) {
    let main = document.getElementById('main')
    let div = document.createElement('button')
    div.classList.add('distributor')
    div.setAttribute('name', `${distributor}`)
    div.innerText = distributor
    main.appendChild(div)
  }
}

function getElementsWithClassname (className) {
  return document.getElementsByClassName(className)
}

function getProductsOfDistributor (distributor) {
  return Products.filter((product) => product.distributor === distributor)
}

function insertEventOnButtons (buttons) {
  for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
      insertModalDistributor(e.target.name)
    })
  }
}



function insertModalDistributor (distributor) {

  const modalContainer = document.getElementById('modal')
  modalContainer.classList.toggle('active')
  const modalContent = document.createElement('section')
  const titleModal = document.createElement('h1')

  const messageContainer = document.createElement('p')
  const btnClose = document.createElement('button')

  modalContainer.classList.add('modal')
  modalContainer.append(modalContent)
  modalContent.classList.add('modal-content')
  modalContent.append(titleModal)
  titleModal.classList.add('title')
  titleModal.textContent = distributor

  let productDistributor = getProductsOfDistributor(distributor)
  let productList = {}
  for (let product of productDistributor) {
    let distributorContent = document.createElement('section')
    let distributorProduct = document.createElement('label')
    let distributorProductInput = document.createElement('input')

    modalContent.append(distributorContent)
    distributorContent.classList.add('product-distributor')
    distributorProduct.textContent = product.name
    distributorProduct.classList.add('product')
    distributorProductInput.setAttribute('type', 'number')
    distributorProductInput.setAttribute('name', `${product.name}`)
    distributorContent.append(distributorProduct, distributorProductInput)
    distributorProductInput.addEventListener('change', (e) => {
      productList[e.target.name] = e.target.value
      showMessage(productList)
    })



  }
  modalContainer?.append(messageContainer)
  modalContainer.append(btnClose)
  messageContainer.classList.add('wsp-message-distributor')
  messageContainer.setAttribute('id', 'wsp-message-distributor')

  btnClose.classList.add('btnClose')
  btnClose.textContent = 'Close'
  btnClose.addEventListener('click', () => {
    modalContainer.classList.toggle('active')
    modalContainer.innerHTML = ''
  })

}

function showMessage (productList) {
  let list = convertObjInString(productList)
  let container = document.getElementById('wsp-message-distributor')

  if (list.length > 0) {
    container.classList.add('active')
    container.textContent = list

  }
  else {
    container.textContent = ''
    container.classList.remove('active')
  }
}


function convertObjInString (obj) {
  if (Object.keys(obj).length <= 0) return

  let m = []
  for (let elem in obj) {
    if (obj[elem] > 0) m = [...m, ` ${elem} ${obj[elem]}`]
  }
  return m.toString().toLowerCase()
}