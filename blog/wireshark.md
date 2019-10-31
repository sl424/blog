
{{{
  "title" : "wireshark terminal commands",
  "tags" : ["wireshark", "tshark"],
  "desc" : "useful wireshark commands",
  "category" : "category",
  "date" : "28 March 2018",
  "arbitrary" : "arbitrary content"
}}}


Reference:

+ [Wireshark](https://osqa-ask.wireshark.org)

# Wireshark Lessons#
---


### basic grep ###
 grep filter

	grep -i "frame\|window\|MSS"

 invert filter

	grep -v "iRTT"

## wireshark ##
With wireshark, I used `dstat -tn` to monitor network traffic for my computer network class. 
It is strictly there to keep my sanity in check.

###Basic capture and read###
 extract packet from wireless to file. 

	tshark -i wlp3s0 -w capture-output.pcap

 extract packet from file

	tshark -r capture-output.pcap

 select frame 10

	tshark -r capture-output.pcap 'frame.number==10'


###Options to filter network traffic:###
These are just some useful options that I used to complete my labs.

 Set the format of the output

	-T  ek|fields|json|pdml|ps|psml|text

 show specific field add:

	-T fields -e http.host -e http.user_agent

 show packet matching display filter add:

	-Y http.request and ip.dest=="0.0.0.0"

 detail view of a specific protocol

	-O tcp

 detail view of all packet details

	-V

 filter icmp and B is ICMP type 11 (TTL expired) include ip fragments

	-Y !(icmp[0]==B) and ip.src=0.0.0.0 and ip.flags.df == 0

 set json output and -j filter to show hex output

	-T json -j "http tcp ip" -x 


### track lost packets###

 retransmission filter

 	-Y "tcp.analysis.retransmission or tcp.analysis.fast_retransmission or tcp.analysis.zero_window"

 to filter away everything that is not TCP or has no TCP payload.

	-Y 'tcp and tcp.len!=0'

 time-seq of packet arrival

	-Y "tcp and not tcp.len==0" -T fields -e frame.time_relative -e tcp.seq

 stacked filter

	-Y '(http or tcp and tcp.len!=0) and frame.number>=10 && frame.number <=16' -O http


### References ###

 summary statistics

	tshark -r input.cap.pcapng -q -z conv,ip > output.txt
	tshark -r input.cap.pcapng -q -z conv,tcp > output.txt
	tshark -r input.cap.pcapng -q -z conv,udp > output.txt

 some protocols, for all protocol: `tshark -G protocols`

	Frame	Frame	frame
	Ethernet	Ethernet	eth
	Internet Protocol Version 4	IPv4	ip
	Internet Protocol Version 6	IPv6	ipv6
	Transmission Control Protocol	TCP	tcp
	Hypertext Transfer Protocol	HTTP	http
	HyperText Transfer Protocol 2	HTTP2	http2

 steal password?

	tshark -i wlan0 -Y 'http.request.method == POST and tcp contains "password"' | grep password


