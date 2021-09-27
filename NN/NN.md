<h1>Installation</h1>	
  <h2>Anaconda Python 3.9</h2>	
  1. Genutzt wurde Python 3.9 in der Anaconda Oberfläche
  2. [Download](https://www.anaconda.com/products/individual)
  <h2>Tensorflow</h2>	
  1. `conda create -n tensorflow pip python=3.9` ersrellt eine neue Vietuelle Umgebung mit python 3.9 und dem Namen tensorflow
  2. `conda activate tensorflow` aktiviert diese Umgebung
  3. `pip install --ignore-installed --upgrade tensorflow==2.5.0` installiert tensorflow 2.5.0
  4. `python -c "import tensorflow as tf;print(tf.reduce_sum(tf.random.normal([1000, 1000])))"` verifiziert die tensorflow installation
  <h2>GPU-Support</h2>
  1. [CUDA Toolkit](https://developer.nvidia.com/compute/machine-learning/cudnn/secure/8.1.0.77/11.2_20210127/cudnn-11.2-windows-x64-v8.1.0.77.zip)
  2. [CUDNN](https://developer.nvidia.com/rdp/cudnn-download)
  <h2>GPU-Treiber</h2>
  [Treiber](http://www.nvidia.com/Download/index.aspx)
 <h2>Git</h2>
  [Git](https://git-scm.com/downloads)
 <h2>Tensorflow models</h2>
  [Tensorflow models repository](https://github.com/tensorflow/models)
  `TensorFlow/
  └─ models/
    ├─ community/
    ├─ official/
    ├─ orbit/
     ├─ research/
     └── ...` 
     so sieht die Ordnerstruktur danach aus.
  <h2>Protobuf</h2>
   1.  [Protobuf](https://github.com/protocolbuffers/protobuf/releases);genutz wurde protoc-3.12.3-win64.zip
   2.  `protoc object_detection/protos/*.proto --python_out=.`
  <h2>COCO API</h2>
   1. `pip install cython`
   2. `pip install git+https://github.com/philferriere/cocoapi.git#subdirectory=PythonAPI`
  <h2>Object Detection API</h2>
   1. `cp object_detection/packages/tf2/setup.py .`
   2. `python -m pip install --use-feature=2020-resolver .`
<h1>Trainieren</h1>	
  <h2>Vorbereiten des Datensatzes</h2>
    <h3>Labelimg</h3>
      1.  `pip install labelImg`
      2.  `labelImg [IMAGE_PATH] [PRE-DEFINED CLASS FILE]`
    <h3>Partition the Dataset</h3>
      1.  `python partition_dataset.py -x -i [PATH_TO_IMAGES_FOLDER] -r 0.1`
    <h3>Erstellen der Label Map</h3>
`item {
    id: 1
    name: 'cat'
}
`
    <h3>Erstellen der TensorFlow Records</h3>
      1. `conda install pandas`
      2. `python generate_tfrecord.py -x [PATH_TO_IMAGES_FOLDER]/train -l [PATH_TO_ANNOTATIONS_FOLDER]/label_map.pbtxt -o [PATH_TO_ANNOTATIONS_FOLDER]/train.record`
      3. `python generate_tfrecord.py -x [PATH_TO_IMAGES_FOLDER]/test -l [PATH_TO_ANNOTATIONS_FOLDER]/label_map.pbtxt -o [PATH_TO_ANNOTATIONS_FOLDER]/test.record`
     <h3>Trainieren des Models</h3> 
     `python model_main_tf2.py --model_dir=models/my_ssd_resnet50_v1_fpn --pipeline_config_path=models/my_ssd_resnet50_v1_fpn/pipeline.config`
     <h3>Exportieren des Models</h3> 
     `python .\exporter_main_v2.py --input_type image_tensor --pipeline_config_path .\models\my_ssd_resnet50_v1_fpn\pipeline.config --trained_checkpoint_dir .\models\my_ssd_resnet50_v1_fpn\ --output_directory .\exported-models\my_model`
