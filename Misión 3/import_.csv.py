# Nota de Fer: importar la info del .csv por medio de python y exportarla a .json

import pandas as pd
import json

# 1. Leer el CSV con UTF-8-sig para manejar caracteres especiales (en el .json salía un carácter no soportado)
csv_path = "BICs.csv"
df = pd.read_csv(csv_path, sep=None, engine="python", encoding="utf-8-sig")

# 2. Limpiar datos (me tomó el resto del .csv como filas vacías y las rellenó con NaN por defecto, por lo que hay que eliminarlas)
df = df.dropna(how="all")

# 3. Renombrar columnas (quitar espacios raros en encabezados)
df.columns = df.columns.str.strip()

# 4. Separar coordenadas en Latitud y Longitud
if "Coordenadas" in df.columns:
    df[["Latitud", "Longitud"]] = df["Coordenadas"].str.split(",", expand=True)
    df["Latitud"] = df["Latitud"].astype(str).str.strip().astype(float)
    df["Longitud"] = df["Longitud"].astype(str).str.strip().astype(float)

# 5. Forzar números enteros en el campo "ID"
df["ID"] = df["ID"].astype("Int64")

# 6. Convertir a lista de diccionarios
bic_data = df.to_dict(orient="records")

# 7. Guardar como .json para que lo lea script.js
json_path = "BICs.json"
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(bic_data, f, ensure_ascii=False, indent=4)