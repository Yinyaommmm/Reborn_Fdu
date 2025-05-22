from PIL import Image
import os
from concurrent.futures import ThreadPoolExecutor

def convert_png_to_webp(input_output_pair, quality=80):
    input_path, output_path = input_output_pair
    try:
        img = Image.open(input_path).convert("RGBA")
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        img.save(output_path, 'WEBP', quality=quality, method=6)
        print(f'✅ 转换完成: {input_path} -> {output_path}')
    except Exception as e:
        print(f'❌ 错误: {input_path}, 错误信息: {e}')

input_folder = 'public/png'
output_folder = 'public/webp'

task_list = []

for root, dirs, files in os.walk(input_folder):
    for file in files:
        if file.lower().endswith('.png'):
            input_path = os.path.join(root, file)
            relative_path = os.path.relpath(input_path, input_folder)
            output_path = os.path.join(output_folder, relative_path).replace('.png', '.webp')
            task_list.append((input_path, output_path))

max_workers = min(32, os.cpu_count() + 4)
with ThreadPoolExecutor(max_workers=max_workers) as executor:
    executor.map(convert_png_to_webp, task_list)