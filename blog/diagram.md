
{{{
  "title" : "Diagrams",
  "tags" : ["PlantUML", "UML", "Graphiz", "diagrams"],
  "desc" : "use plantUML for all your diagrams needs",
  "category" : "diagrams",
  "date" : "06 April 2018",
  "arbitrary" : "arbitrary content"
}}}

Reference:

+ [PlantUML](http://plantuml.com/)

# Diagrams #
---

## PlantUML ##
PlantUML is based on the Graphiz engine but its great for doing any diagrams:

* Sequence diagram
* Class diagram
* State diagram

For me, the great thing is that you can embed the plantUML code within the source
code of your project and track change with git.

## Example ##

Here is a simple schema diagram for my database class.

![schema](./blog-dir/schema.png "schema")

	@startuml
	skinparam monochrome true
	entity "beds" {
		+ <u>id</u> [PK]
		--
		name
		area
	}

	entity "seeds" {
		+ <u>id</u> [PK]
		--
		+ fid (family_id) [FK]
		+ do_best (month_id) [FK]
		--
		name
		sunlight
		water
		area
	}

	entity "month" {
		+ <u>id</u> [PK]
		--
		name
		avg_high
		avg_low
		water
	}

	entity "family"{
		+ <u>id</u> [PK]
		--
		name
		alias
	}

	entity "affects" <<(R,olive)>>{
		+ <u>id</u> [PK]
		--
		bid (beds_id) [FK]
		mid (month_id) [FK]
		--
		sunlight
	}


	entity "planted" <<(R,olive)>>{
		+ <u>id</u> [PK]
		--
		bid (beds_id) [FK]
		sid (seeds_id) [FK]
		--
		date
	}

	seeds::fid -[dotted]-> family::id
	seeds::do_best -[dotted]-> month::id

	affects::bid -[dotted]-> beds::id
	affects::mid -[dotted]->month::id

	planted::bid -[dotted]-> beds::id
	planted::sid -[dotted]-> seeds::id


	beds "m" ||- planted
	planted  -|| "n" seeds

	beds "m" ||- affects
	affects  -|| "n" month

	seeds "m" --* "1" family : member_of
	seeds --- month : do_best

	@enduml


