# recursive search inside current directory
grep --recursive --exclude-dir={node_modules,.next,.terraform,out} 'todo' ./*
grep --exclude-dir={node_modules,.next,.terraform,out} 'todo' ./*

# @TODO this is not given the desired output..
