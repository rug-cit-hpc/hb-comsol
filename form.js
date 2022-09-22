// 'use strict'

// /**
//  * Fix num cores, allowing blanks to remain
//  */
// function fix_num_cores() {
//   let node_type_input = $('#batch_connect_session_context_node_type');
//   let node_type = node_type_input.val();
//   let num_cores_input = $('#num_cores');
  
//   if(num_cores_input.val() === '') {
//     return;
//   }
  
//   let num_cores = 24;

//   if(node_type === 'Regular') {
//     num_cores = 28;
//   } else if(node_type === 'himem') {
//     num_cores = 48;
//   } else if(node_type === 'gelifes') {
//     num_cores = 64;
//   } 
  
  
//   num_cores_input.attr('max', num_cores);
//   num_cores_input.attr('min', 1);
//   num_cores_input.val(1);
//   console.log(num_cores_input.val());
// }

// /**
//  * Change the maximum number of cores selected.
//  */
// function set_node_type_change_handler() {
//   let node_type_input = $('#batch_connect_session_context_node_type');
//   node_type_input.change(node_type_input, fix_num_cores);
// }

// $(document).ready(function() {
//   // Set the max value to be what was set in the last session
//   fix_num_cores();
//   set_node_type_change_handler();
// });