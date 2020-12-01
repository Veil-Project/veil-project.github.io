---
title: How does Dandelion work?
ref: dandelion
---
Dandelion is a transaction broadcasting mechanism that reduces the risk of eavesdroppers linking transactions to the source IP. 

Dandelion alters the flow of transaction propagation through the network. 
By splitting the transaction into two phases, called the "stem" and "fluff" phase, it becomes very difficult to link transactions with their source IP.

During the stem phase, each node relays the transaction to a *single* peer. 
After a random number of hops along the stem, the transaction enters the fluff phase, which behaves just like ordinary flooding/diffusion.
Even when an attacker can identify the location of the fluff phase, it is much more difficult to identify the source of the stem. 

Illustration:


                                                     ┌-> F ...
                                             ┌-> D --┤
                                             |       └-> G ...
    A --[stem]--> B --[stem]--> C --[bloom]--┤
                                             |       ┌-> H ...
                                             └-> E --┤
                                                     └-> I ...


