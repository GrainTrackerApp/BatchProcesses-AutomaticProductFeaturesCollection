Zur Herstellung der .xml annotations der Bilder wird das Programm Labelimg verwendet.
partition_dataset.py teilt gesamten zu trainierenden den Datensatz im Verhältnis 9:1. Dabei weden die Bilder und deren zugehörigen .xml Dateien in dem Verhältnis auf die Ordner train (90%) und test (10%) aufgeteilt.
generate_tfrecord.py konvertiert die annotations der .xml Dateien in die zum Trainieren benötigten TFRecords.
