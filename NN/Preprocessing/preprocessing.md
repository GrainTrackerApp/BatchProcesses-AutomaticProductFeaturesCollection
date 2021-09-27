<h1>Preprocessing</h1>
  <h2>Labelimg</h2>
Zur Herstellung der .xml annotations der Bilder wird das Programm Labelimg verwendet.
	<h2>Partitionieren des Datensatzes</h2>
partition_dataset.py teilt gesamten zu trainierenden den Datensatz im Verhältnis 9:1. Dabei weden die Bilder und deren zugehörigen .xml Dateien in dem Verhältnis auf die Ordner train (90%) und test (10%) aufgeteilt.
	<h2>TFRecords</h2>
generate_tfrecord.py konvertiert die annotations der .xml Dateien in die zum Trainieren benötigten TFRecords.
