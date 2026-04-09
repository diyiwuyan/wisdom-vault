# -*- coding: utf-8 -*-
"""诊断乱码的实际字符类型"""
import os

fpath = os.path.join(os.path.dirname(__file__), 'concepts', 'compounding.html')

with open(fpath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("=== 乱码行样本（前15行含非ASCII字符）===")
count = 0
for i, line in enumerate(lines):
    non_ascii = [(j, c, hex(ord(c))) for j, c in enumerate(line) if ord(c) > 127]
    if non_ascii:
        print(f"L{i+1}: {repr(line[:120])}")
        print(f"  chars: {non_ascii[:8]}")
        count += 1
        if count >= 15:
            break

# 也看原始字节
print("\n=== 原始字节（前2000字节）===")
with open(fpath, 'rb') as f:
    raw = f.read(2000)
# 找第一个非ASCII字节
for i, b in enumerate(raw):
    if b > 127:
        print(f"First non-ASCII byte at offset {i}: 0x{b:02x}")
        print(f"Context bytes: {raw[max(0,i-10):i+20].hex()}")
        print(f"Context text (latin-1): {raw[max(0,i-10):i+20].decode('latin-1')}")
        break
