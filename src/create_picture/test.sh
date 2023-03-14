#!/bin/bash

cd /home/emchang/PycharmProjects/stableDiffusionV2/stablediffusion
# python scripts/txt2img.py --prompt "\"$2\"" --ckpt wd-1-4-anime_e1.ckpt --config configs/wd-1-4-anime_e1.yaml --H 768 --W 768 --outdir outputs/$1

cd ./outputs/$1/samples
echo `ls`
array=(`ls`)

echo array[0] = ${array[0]}

for ((a=0; a<${#array[@]}; a++))
do 
   lastIndex=$a
done

echo aSD ${array[$lastIndex]} // last picture

if [ ! -e /home/emchang/Desktop/NestJs-Practice/src/public/$1 ]; then
    mkdir /home/emchang/Desktop/NestJs-Practice/src/public/$1
fi



mv /home/emchang/PycharmProjects/stableDiffusionV2/stablediffusion/outputs/$1/samples/${array[$lastIndex]} /home/emchang/Desktop/NestJs-Practice/src/public/$1

