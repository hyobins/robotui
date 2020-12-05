cmake_minimum_required(VERSION 3.0.2)
project(cranberry_topic)

## Compile as C++11, supported in ROS Kinetic and newer
# add_compile_options(-std=c++11)

## Find catkin macros and libraries
## if COMPONENTS list like find_package(catkin REQUIRED COMPONENTS xyz)
## is used, also find other catkin packages
find_package(catkin REQUIRED COMPONENTS
  message_generation
  rospy
  roscpp
  std_msgs
)

add_service_files(DIRECTORY srv FILES CommLight.srv)
 
generate_messages(DEPENDENCIES std_msgs)
 
catkin_package(
#LIBRARIES cranberry_topic
CATKIN_DEPENDS std_msgs roscpp rospy message_runtime)
 
include_directories(${catkin_INCLUDE_DIRS})
 
add_executable(comm_light_server src/comm_light_server.cpp)
add_dependencies(comm_light_server ${${PROJECT_NAME}_EXPORTED_TARGETS}
${catkin_EXPORTED_TARGETS})
target_link_libraries(comm_light_server ${catkin_LIBRARIES})
